// MyGreens — growth photos held on this device (IndexedDB).
// Used as the offline queue when no GitHub token is connected.

// ─────────────────────────────────────────────
// Photos (IndexedDB — stored on this device)
// ─────────────────────────────────────────────
let dbPromise = null;
function openDB() {
    if (!dbPromise) {
        dbPromise = new Promise((resolve, reject) => {
            const req = indexedDB.open('mygreens', 1);
            req.onupgradeneeded = () => {
                const store = req.result.createObjectStore('photos', { keyPath: 'id', autoIncrement: true });
                store.createIndex('plantId', 'plantId');
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }
    return dbPromise;
}

async function dbAddPhoto(plantId, blob) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readwrite');
        tx.objectStore('photos').add({ plantId, date: new Date().toISOString(), blob });
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

async function dbGetPhotos(plantId) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const req = db.transaction('photos').objectStore('photos')
            .index('plantId').getAll(IDBKeyRange.only(plantId));
        req.onsuccess = () => resolve(req.result.sort((a, b) => b.date.localeCompare(a.date)));
        req.onerror = () => reject(req.error);
    });
}

async function dbDeletePhoto(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readwrite');
        tx.objectStore('photos').delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}
