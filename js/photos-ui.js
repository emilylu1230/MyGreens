// MyGreens — photo UI: the growth grid, day-numbered timeline captions,
// capture/sync controls and the lightbox. Merges local and repo photos.

let photoCounts = {};
let latestPhotoUrls = {};
let localOnlyCounts = {};
let cardBlobUrls = [];

async function dbGetAllPhotos() {
    try {
        const db = await openDB();
        return await new Promise((resolve, reject) => {
            const req = db.transaction('photos').objectStore('photos').getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    } catch (e) { return []; }
}

// Remote photos merged with anything still only on this device.
async function photosFor(plant) {
    const manifest = await ghLoadManifest();
    const remote = (manifest[plantSlug(plant)] || []).slice();
    const local = (await dbGetPhotos(plant.id))
        .map(p => ({ kind: 'local', id: p.id, date: p.date, blob: p.blob }));
    return remote.concat(local).sort((a, b) => b.date.localeCompare(a.date));
}

async function refreshPhotoCounts() {
    const manifest = await ghLoadManifest();
    const all = await dbGetAllPhotos();

    cardBlobUrls.forEach(u => URL.revokeObjectURL(u));
    cardBlobUrls = [];
    photoCounts = {};
    localOnlyCounts = {};
    latestPhotoUrls = {};

    const latestLocal = {};
    all.forEach(p => {
        localOnlyCounts[p.plantId] = (localOnlyCounts[p.plantId] || 0) + 1;
        if (!latestLocal[p.plantId] || p.date > latestLocal[p.plantId].date) latestLocal[p.plantId] = p;
    });

    plants.forEach(plant => {
        const remote = manifest[plantSlug(plant)] || [];
        const localCount = localOnlyCounts[plant.id] || 0;
        const total = remote.length + localCount;
        if (!total) return;
        photoCounts[plant.id] = total;

        const lp = latestLocal[plant.id];
        const rp = remote[0];
        if (lp && (!rp || lp.date > rp.date)) {
            const url = URL.createObjectURL(lp.blob);
            cardBlobUrls.push(url);
            latestPhotoUrls[plant.id] = url;
        } else if (rp) {
            latestPhotoUrls[plant.id] = rp.url;
        }
    });
}

let thumbUrls = [];
function revokeThumbs() {
    thumbUrls.forEach(u => URL.revokeObjectURL(u));
    thumbUrls = [];
}

function fmtDate(iso) {
    return new Date(iso).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-AU',
        { year: 'numeric', month: 'short', day: 'numeric' });
}

// Day count relative to a plant's first (oldest) growth photo, so the log
// reads as a timeline ("Day 0" ... "Day 32") rather than a bare date.
function dayNumber(iso, oldestIso) {
    const ms = new Date(iso).setHours(0, 0, 0, 0) - new Date(oldestIso).setHours(0, 0, 0, 0);
    return Math.round(ms / 86400000);
}
function dayLabel(n) {
    return lang === 'zh' ? `第 ${n} 天` : `Day ${n}`;
}

// The list backing the currently open photo grid, so the lightbox can index it.
let currentPhotos = [];

async function renderPhotoGrid(plantId) {
    const grid = document.getElementById('photoGrid');
    if (!grid) return;
    const plant = plants.find(p => p.id === plantId);
    if (!plant) return;
    revokeThumbs();
    const ui = UI[lang];
    const photos = await photosFor(plant);
    currentPhotos = photos;
    renderPhotoTools(plant);
    if (!photos.length) {
        grid.innerHTML = `<div class="photo-empty" style="grid-column:1/-1">${ui.noPhotos}</div>`;
        return;
    }
    // photos is newest-first; the oldest is last.
    const oldest = photos[photos.length - 1].date;
    const summary = document.getElementById('photoSummary');
    if (summary) {
        summary.textContent = photos.length > 1
            ? ui.growthSummary(dayNumber(photos[0].date, oldest), photos.length)
            : '';
    }
    grid.innerHTML = photos.map((p, i) => {
        let url;
        if (p.kind === 'local') {
            url = URL.createObjectURL(p.blob);
            thumbUrls.push(url);
        } else {
            url = p.url;
        }
        const badge = p.kind === 'local' ? `<div class="photo-local">${ui.localBadge}</div>` : '';
        return `
            <div class="photo-thumb" onclick="openLightbox(${i}, ${plantId})">
                <img src="${url}" alt="" loading="lazy">
                ${badge}
                <div class="photo-date"><b>${dayLabel(dayNumber(p.date, oldest))}</b><span class="photo-date-day">${fmtDate(p.date)}</span></div>
            </div>`;
    }).join('');
}

// Connect / sync row under the camera buttons.
function renderPhotoTools(plant) {
    const box = document.getElementById('photoTools');
    if (!box) return;
    const ui = UI[lang];
    const pending = localOnlyCounts[plant.id] || 0;
    const note = document.getElementById('photoNote');
    if (note) note.textContent = ghConnected() ? ui.photoNote : ui.photoNoteLocal;
    if (!ghConnected()) {
        box.innerHTML = `<button class="photo-btn" onclick="cloudConnect(${plant.id})">${ui.cloudConnect}</button>`;
        return;
    }
    const sync = pending
        ? `<button class="photo-btn" onclick="cloudSync(${plant.id})">${ui.syncUp(pending)}</button>`
        : '';
    box.innerHTML = `${sync}
        <span class="cloud-on">${ui.cloudOn}</span>
        <button class="photo-link" onclick="cloudDisconnect(${plant.id})">${ui.cloudOff}</button>`;
}

window.cloudConnect = async function(plantId) {
    const ui = UI[lang];
    const token = (prompt(ui.cloudPrompt) || '').trim();
    if (!token) return;
    if (!await ghCheckToken(token)) { alert(ui.cloudBadToken); return; }
    try { localStorage.setItem(GH_TOKEN_KEY, token); } catch (e) {}
    alert(ui.cloudSaved);
    await ghLoadManifest(true);
    await renderPhotoGrid(plantId);
    await refreshPhotoCounts();
    if (view === 'loc') renderLocations(); else renderGrid();
};

window.cloudDisconnect = async function(plantId) {
    if (!confirm(UI[lang].cloudDisconnect)) return;
    try { localStorage.removeItem(GH_TOKEN_KEY); } catch (e) {}
    await renderPhotoGrid(plantId);
};

// Push anything captured while offline / unconnected.
window.cloudSync = async function(plantId) {
    const ui = UI[lang];
    const plant = plants.find(p => p.id === plantId);
    const box = document.getElementById('photoTools');
    if (box) box.innerHTML = `<span class="cloud-on">${ui.syncing}</span>`;
    const local = await dbGetPhotos(plantId);
    let failed = 0;
    for (const p of local) {
        try {
            await ghUpload(plantSlug(plant), p.blob);
            await dbDeletePhoto(p.id);
        } catch (e) { failed++; }
    }
    await refreshPhotoCounts();
    await renderPhotoGrid(plantId);
    if (view === 'loc') renderLocations(); else renderGrid();
    if (failed) alert(ui.uploadFail);
};

window.capturePhoto = function(plantId, useCamera) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    if (useCamera) input.setAttribute('capture', 'environment');
    input.onchange = async () => {
        const file = input.files && input.files[0];
        if (!file) return;
        const ui = UI[lang];
        const plant = plants.find(p => p.id === plantId);
        const blob = await compressImage(file);
        const box = document.getElementById('photoTools');

        if (ghConnected()) {
            if (box) box.innerHTML = `<span class="cloud-on">${ui.uploading}</span>`;
            try {
                await ghUpload(plantSlug(plant), blob);
            } catch (e) {
                await dbAddPhoto(plantId, blob);
                alert(ui.uploadFail);
            }
        } else {
            await dbAddPhoto(plantId, blob);
        }
        await refreshPhotoCounts();
        await renderPhotoGrid(plantId);
        if (view === 'loc') renderLocations(); else renderGrid();
    };
    input.click();
};

let lbUrl = null;
window.openLightbox = async function(index, plantId) {
    const ui = UI[lang];
    const photo = currentPhotos[index];
    if (!photo) return;
    if (lbUrl) { URL.revokeObjectURL(lbUrl); lbUrl = null; }
    if (photo.kind === 'local') {
        lbUrl = URL.createObjectURL(photo.blob);
        document.getElementById('lbImg').src = lbUrl;
    } else {
        document.getElementById('lbImg').src = photo.url;
    }
    const oldest = currentPhotos[currentPhotos.length - 1].date;
    document.getElementById('lbMeta').textContent =
        `${dayLabel(dayNumber(photo.date, oldest))} · ${fmtDate(photo.date)}` +
        (photo.kind === 'local' ? ` · ${ui.localBadge}` : '');
    document.getElementById('lbCloseBtn').textContent = ui.closePhoto;
    const delBtn = document.getElementById('lbDelBtn');
    delBtn.textContent = ui.deletePhoto;
    delBtn.onclick = async () => {
        if (!confirm(photo.kind === 'local' ? ui.confirmDelete : ui.deleteRemote)) return;
        try {
            if (photo.kind === 'local') await dbDeletePhoto(photo.id);
            else await ghDelete(photo);
        } catch (e) { alert(ui.uploadFail); return; }
        closeLightbox();
        await refreshPhotoCounts();
        await renderPhotoGrid(plantId);
        if (view === 'loc') renderLocations(); else renderGrid();
    };
    document.getElementById('lightbox').classList.add('show');
};

window.closeLightbox = function(event) {
    if (event && event.target !== document.getElementById('lightbox')) return;
    document.getElementById('lightbox').classList.remove('show');
    if (lbUrl) { URL.revokeObjectURL(lbUrl); lbUrl = null; }
};
