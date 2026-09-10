// MyGreens — watering UI: card pill, detail block, and the Today dashboard.

// ─────────────────────────────────────────────
// Watering: card pill, dashboard, actions
// ─────────────────────────────────────────────
function cardWaterPill(plant) {
    if (!waterOn) return '';
    const ws = waterStatus(plant);
    if (ws.state === 'hold') return '';
    const done = loggedTodayFor(plant.id);
    const cls = done ? 'done' : ws.state === 'overdue' ? 'od' : ws.state === 'due' ? 'due' : 'ok';
    const label = done ? '✓' : ws.state === 'overdue' ? `💧${ws.overdueDays}d` : '💧';
    return `<button class="card-wbtn ${cls}" aria-label="log watering" onclick="event.stopPropagation();waterAction(${plant.id})"${done ? ' disabled' : ''}>${label}</button>`;
}

function waterBlockHtml(plant) {
    const ui = UI[lang];
    const ws = waterStatus(plant);
    const recRow = plant.waterDays == null ? '' : `
        <div class="info-row">
            <div class="info-label">${ui.recommended}</div>
            <div class="info-value">${ui.recEvery(plant.waterDays)}</div>
        </div>`;
    if (ws.state === 'hold') {
        return recRow + `<div class="section-content" style="margin-top:0.4rem">${plant.holdNote ? t(plant.holdNote) : ui.winterHold}</div>`;
    }
    const arr = getLog(plant.id);
    const lastVal = ws.state === 'never' ? ui.never : `${fmtDate(ws.last + 'T00:00:00')} · ${fmtAgo(ws.daysSince)}`;
    const dueVal = ws.state === 'never' ? ui.logFirst : fmtDue(ws);
    const loggedToday = loggedTodayFor(plant.id);
    const hist = arr.slice(-5).reverse().map(d => fmtDate(d + 'T00:00:00')).join(' · ');
    return `
        ${recRow}
        <div class="info-row">
            <div class="info-label">${ui.lastWatered}</div>
            <div class="info-value">${lastVal}</div>
        </div>
        <div class="info-row">
            <div class="info-label">${ui.nextDue}</div>
            <div class="info-value">${dueVal}</div>
        </div>
        <div class="photo-actions">
            <button class="photo-btn" onclick="waterAction(${plant.id})" ${loggedToday ? 'disabled style="opacity:0.6;cursor:default"' : ''}>${loggedToday ? ui.wateredDone : ui.wateredBtn}</button>
            ${arr.length ? `<button class="photo-btn" style="flex:0 0 auto" onclick="undoWaterAction(${plant.id})">${ui.undoLast}</button>` : ''}
        </div>
        ${hist ? `<div class="photo-empty" style="font-size:0.72rem">${ui.recentLog}: ${hist}</div>` : ''}
    `;
}

function waterRowHtml(plant, ws) {
    const ui = UI[lang];
    let meta;
    if (ws.state === 'hold') meta = plant.holdNote ? t(plant.holdNote) : ui.winterHold;
    else if (ws.state === 'never') meta = `${ui.never} · ${ui.logFirst}`;
    else meta = `${ui.lastWatered}: ${fmtAgo(ws.daysSince)} · ${fmtDue(ws)}`;
    const loggedToday = loggedTodayFor(plant.id);
    const btn = ws.state === 'hold' ? '' :
        `<button class="wr-btn ${loggedToday ? 'done' : ''}" onclick="event.stopPropagation();waterAction(${plant.id})" ${loggedToday ? 'disabled' : ''}>${loggedToday ? ui.wateredDone : ui.wateredBtn}</button>`;
    const latin = plant.fullName.en.split(' · ')[0];
    return `
        <div class="water-row s-${ws.state}">
            <div class="wr-main" onclick="openModal(${plant.id})">
                <div class="wr-name">${plant.nickname} <span class="wr-latin">${latin}</span></div>
                <div class="wr-meta">${meta}</div>
            </div>
            ${btn}
        </div>`;
}

function renderDashboard() {
    const ui = UI[lang];
    const groups = { overdue: [], due: [], never: [], soon: [], ok: [], hold: [] };
    plants.forEach(p => { const ws = waterStatus(p); groups[ws.state].push({ p, ws }); });
    groups.overdue.sort((a, b) => b.ws.overdueDays - a.ws.overdueDays);
    groups.soon.sort((a, b) => b.ws.overdueDays - a.ws.overdueDays);

    const dueCount = groups.overdue.length + groups.due.length;
    const overdueCount = groups.overdue.length;

    const stats = `
        <div class="dash-stats">
            <div class="dash-stat"><div class="num">${plants.length}</div><div class="lbl">${ui.statPlants}</div></div>
            <div class="dash-stat due"><div class="num">${dueCount}</div><div class="lbl">${ui.statDue}</div></div>
            <div class="dash-stat overdue"><div class="num">${overdueCount}</div><div class="lbl">${ui.statOverdue}</div></div>
        </div>`;

    const titles = { overdue: ui.gOverdue, due: ui.gDue, never: ui.gNever, soon: ui.gSoon, ok: ui.gOk, hold: ui.gHold };
    let body = '';
    ['overdue', 'due', 'never', 'soon', 'ok', 'hold'].forEach(key => {
        const items = groups[key];
        if (!items.length) return;
        body += `<div class="dash-group"><div class="dash-group-title">${titles[key]} · ${items.length}</div>`;
        items.forEach(({ p, ws }) => { body += waterRowHtml(p, ws); });
        body += `</div>`;
    });
    if (dueCount === 0) body = `<div class="dash-empty">${ui.nothingDue}</div>` + body;

    document.getElementById('dashboard').innerHTML = stats + body;
}

function afterWaterChange(id) {
    const wb = document.getElementById('waterBlock');
    if (wb && currentModalPlantId === id) {
        wb.innerHTML = waterBlockHtml(plants.find(p => p.id === id));
    }
    if (view === 'today') renderDashboard();
    else if (view === 'loc') renderLocations();
    else renderGrid();
}
window.waterAction = function(id) { logWater(id); afterWaterChange(id); };
window.undoWaterAction = function(id) { undoLastWater(id); afterWaterChange(id); };
