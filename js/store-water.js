// MyGreens — watering log. Dates only, stored per-device in localStorage.

// ─────────────────────────────────────────────
// Watering log (localStorage — dates only, on this device)
// ─────────────────────────────────────────────
const WATER_KEY = 'mygreens_water_v1';

function loadWaterLog() {
    try { return JSON.parse(localStorage.getItem(WATER_KEY)) || {}; }
    catch (e) { return {}; }
}
function saveWaterLog(log) { localStorage.setItem(WATER_KEY, JSON.stringify(log)); }

function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function daysBetween(a, b) {
    return Math.round((Date.parse(b + 'T00:00:00') - Date.parse(a + 'T00:00:00')) / 86400000);
}

function getLog(id) { return (loadWaterLog()[id] || []).slice().sort(); }
function loggedTodayFor(id) { const a = getLog(id); return a.length > 0 && a[a.length - 1] === todayStr(); }

function logWater(id) {
    const log = loadWaterLog();
    const arr = log[id] || [];
    const t = todayStr();
    if (!arr.includes(t)) { arr.push(t); arr.sort(); log[id] = arr; saveWaterLog(log); }
}
function undoLastWater(id) {
    const log = loadWaterLog();
    const arr = (log[id] || []).slice().sort();
    arr.pop();
    if (arr.length) log[id] = arr; else delete log[id];
    saveWaterLog(log);
}

// state ∈ hold | never | overdue | due | soon | ok
function waterStatus(plant) {
    if (plant.hold || plant.waterDays == null) return { state: 'hold' };
    const arr = getLog(plant.id);
    if (!arr.length) return { state: 'never' };
    const last = arr[arr.length - 1];
    const daysSince = daysBetween(last, todayStr());
    const overdueDays = daysSince - plant.waterDays;
    let state;
    if (overdueDays > 0) state = 'overdue';
    else if (overdueDays === 0) state = 'due';
    else if (-overdueDays <= 2) state = 'soon';
    else state = 'ok';
    return { state, last, daysSince, overdueDays };
}

function fmtAgo(daysSince) {
    const ui = UI[lang];
    return daysSince <= 0 ? ui.today : ui.dayAgo(daysSince);
}
function fmtDue(ws) {
    const ui = UI[lang];
    if (ws.state === 'overdue') return `<span class="od">${ui.overdueBy(ws.overdueDays)}</span>`;
    if (ws.state === 'due') return ui.dueToday;
    return ui.inDays(-ws.overdueDays);
}
