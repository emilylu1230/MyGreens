// MyGreens — shared app state: language, current view, sort, watering
// visibility, and per-device plant location overrides.

// ─────────────────────────────────────────────
// State
// ─────────────────────────────────────────────
let lang = localStorage.getItem('plantLang') || 'zh';
let sortBy = 'light';
let view = 'grid';
// Watering tracking (the log, due dates and Today tab) is off by default and
// opted into via the toggle. The watering *care guidance* on each plant always
// stays visible regardless.
let waterOn = (() => {
    try { return localStorage.getItem('plantWaterOn') === '1'; } catch (e) { return false; }
})();

// Where a plant actually sits right now. Each plant's `locationNo` is the
// recommended spot; moving one stores an override on this device only, so
// "reset" just clears the overrides and the recommendation shows through again.
const LOC_KEY = 'plantLocOverrides';
let locOverrides = (() => {
    try { return JSON.parse(localStorage.getItem(LOC_KEY)) || {}; } catch (e) { return {}; }
})();

function saveLocOverrides() {
    try { localStorage.setItem(LOC_KEY, JSON.stringify(locOverrides)); } catch (e) {}
}
function locOf(plant) {
    const o = locOverrides[plant.id];
    return (o && LOCATIONS[o]) ? o : plant.locationNo;
}
function isMoved(plant) { return locOf(plant) !== plant.locationNo; }
function movedCount() { return plants.filter(isMoved).length; }

window.setPlantLocation = function(plantId, locNo) {
    const plant = plants.find(p => p.id === plantId);
    if (!plant) return;
    locNo = Number(locNo);
    if (locNo === plant.locationNo) delete locOverrides[plant.id];
    else locOverrides[plant.id] = locNo;
    saveLocOverrides();
    openModal(plantId);
    if (view === 'loc') renderLocations(); else if (view === 'grid') renderGrid();
};

window.resetLocations = function() {
    if (!movedCount()) return;
    if (!confirm(UI[lang].locResetConfirm)) return;
    locOverrides = {};
    saveLocOverrides();
    renderLocations();
};

function applyWaterVisibility() {
    const btn = document.getElementById('btnWaterToggle');
    const today = document.getElementById('btnToday');
    // Label states the action, so it can't be mistaken for a "log water" button.
    if (btn) btn.textContent = waterOn ? UI[lang].waterTrackHide : UI[lang].waterTrackShow;
    // Only the Today tab (due dates, logging) depends on tracking. The 💧 sort
    // uses each plant's thirst rating — a fixed care fact, not the log — so it
    // stays available either way.
    if (today) today.style.display = waterOn ? '' : 'none';
}

window.toggleWatering = function() {
    waterOn = !waterOn;
    try { localStorage.setItem('plantWaterOn', waterOn ? '1' : '0'); } catch (e) {}
    applyWaterVisibility();
    if (!waterOn && view === 'today') { setView('grid'); return; }
    syncControls();
    if (view === 'loc') renderLocations(); else if (view === 'grid') renderGrid();
};

function t(obj) { return typeof obj === 'string' ? obj : obj[lang]; }

function normalizeLevel(level) {
    if (level >= 5) return 3;
    if (level >= 3) return 2;
    return 1;
}
