// MyGreens — growth photos in the GitHub repo.
// Reading is public; uploading/deleting needs a per-device token.

// ─────────────────────────────────────────────
// Online photos (GitHub repo — photos/{slug}/{timestamp}.jpg)
// Reading is public and needs no token; uploading/deleting needs one.
// The token is kept in localStorage on this device and never committed.
// ─────────────────────────────────────────────
const GH = { owner: 'emilylu1230', repo: 'MyGreens', branch: 'main', dir: 'photos' };
const GH_TOKEN_KEY = 'mygreensGhToken';

function ghToken() {
    try { return localStorage.getItem(GH_TOKEN_KEY) || ''; } catch (e) { return ''; }
}
function ghConnected() { return !!ghToken(); }

function ghHeaders(withAuth) {
    const h = { 'Accept': 'application/vnd.github+json' };
    if (withAuth) h['Authorization'] = `Bearer ${ghToken()}`;
    return h;
}

// The plant's stable folder name, reused from its image filename — nicknames
// change in this collection, image slugs have not.
function plantSlug(plant) {
    return (plant.img || '').replace(/^images\//, '').replace(/\.[a-z]+$/i, '') || `plant-${plant.id}`;
}

function rawUrl(path) {
    return `https://raw.githubusercontent.com/${GH.owner}/${GH.repo}/${GH.branch}/${path}`;
}

// Filenames are ISO timestamps, so the date comes back out of the name.
function dateFromName(name) {
    const m = name.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2})-(\d{2})-(\d{2})/);
    return m ? `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}Z` : new Date(0).toISOString();
}

// One recursive tree call returns every photo for every plant. The result is
// cached locally so an offline load — or a spent API rate limit, which is only
// 60/hour unauthenticated — still shows the photos instead of an empty grid.
const GH_CACHE_KEY = 'mygreensPhotoManifest';
let ghManifest = null;

function ghReadCache() {
    try { return JSON.parse(localStorage.getItem(GH_CACHE_KEY)) || null; } catch (e) { return null; }
}
function ghWriteCache(m) {
    try { localStorage.setItem(GH_CACHE_KEY, JSON.stringify(m)); } catch (e) {}
}

async function ghLoadManifest(force) {
    if (ghManifest && !force) return ghManifest;
    if (!ghManifest) ghManifest = ghReadCache();
    try {
        const res = await fetch(
            `https://api.github.com/repos/${GH.owner}/${GH.repo}/git/trees/${GH.branch}?recursive=1`,
            { headers: ghHeaders(ghConnected()) });
        if (!res.ok) throw new Error(`tree ${res.status}`);
        const data = await res.json();
        const byPlant = {};
        (data.tree || []).forEach(node => {
            if (node.type !== 'blob') return;
            const m = node.path.match(/^photos\/([^/]+)\/(.+\.jpe?g)$/i);
            if (!m) return;
            (byPlant[m[1]] = byPlant[m[1]] || []).push({
                kind: 'remote', slug: m[1], name: m[2], path: node.path,
                sha: node.sha, url: rawUrl(node.path), date: dateFromName(m[2]),
            });
        });
        Object.values(byPlant).forEach(list => list.sort((a, b) => b.date.localeCompare(a.date)));
        ghManifest = byPlant;
        ghWriteCache(byPlant);
    } catch (e) {
        ghManifest = ghManifest || {};
    }
    return ghManifest;
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(String(r.result).split(',')[1]);
        r.onerror = reject;
        r.readAsDataURL(blob);
    });
}

async function ghUpload(slug, blob) {
    const name = new Date().toISOString().replace(/[:.]/g, '-').replace(/Z$/, '') + '.jpg';
    const path = `${GH.dir}/${slug}/${name}`;
    const res = await fetch(`https://api.github.com/repos/${GH.owner}/${GH.repo}/contents/${path}`, {
        method: 'PUT',
        headers: { ...ghHeaders(true), 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: `Add growth photo for ${slug}`,
            content: await blobToBase64(blob),
            branch: GH.branch,
        }),
    });
    if (!res.ok) throw new Error(`upload ${res.status}`);
    const data = await res.json();
    const item = {
        kind: 'remote', slug, name, path, sha: data.content && data.content.sha,
        url: rawUrl(path), date: dateFromName(name),
    };
    ghManifest = ghManifest || {};
    (ghManifest[slug] = ghManifest[slug] || []).unshift(item);
    ghWriteCache(ghManifest);
    return item;
}

async function ghDelete(item) {
    const res = await fetch(`https://api.github.com/repos/${GH.owner}/${GH.repo}/contents/${item.path}`, {
        method: 'DELETE',
        headers: { ...ghHeaders(true), 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `Remove growth photo ${item.name}`, sha: item.sha, branch: GH.branch }),
    });
    if (!res.ok) throw new Error(`delete ${res.status}`);
    if (ghManifest && ghManifest[item.slug]) {
        ghManifest[item.slug] = ghManifest[item.slug].filter(p => p.path !== item.path);
        ghWriteCache(ghManifest);
    }
}

async function ghCheckToken(token) {
    try {
        const res = await fetch(`https://api.github.com/repos/${GH.owner}/${GH.repo}`,
            { headers: { 'Accept': 'application/vnd.github+json', 'Authorization': `Bearer ${token}` } });
        if (!res.ok) return false;
        const repo = await res.json();
        return !!(repo.permissions && repo.permissions.push);
    } catch (e) { return false; }
}

async function compressImage(file) {
    const img = await new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = reject;
        i.src = URL.createObjectURL(file);
    });
    const MAX = 1200;
    const scale = Math.min(1, MAX / Math.max(img.width, img.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(img.src);
    return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.82));
}
