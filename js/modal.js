// MyGreens — the plant detail panel.

// ─────────────────────────────────────────────
// Modal
// ─────────────────────────────────────────────
let currentModalPlantId = null;

window.openModal = function(plantId) {
    const plant = plants.find(p => p.id === plantId);
    if (!plant) return;
    currentModalPlantId = plantId;

    const ui = UI[lang];
    const st = STATUS[plant.status];
    const curLoc = locOf(plant);
    const loc = LOCATIONS[curLoc];

    document.getElementById('modalTitle').textContent = plant.nickname;
    document.getElementById('modalSubtitle').textContent = plant.latin + ' · ' + t(plant.fullName);

    const alertHtml = plant.alert ? `
        <div class="warn-card">
            <div class="warn-label">${ui.attention}</div>
            <div class="warn-text">${t(plant.alert)}</div>
        </div>` : '';

    document.getElementById('modalBody').innerHTML = `
        <div class="modal-status ${st.ms}">
            <div class="modal-status-dot ${st.dot}"></div>
            <div>
                <div>${t(st.label)}</div>
                <div class="modal-status-desc">${t(st.desc)}</div>
            </div>
        </div>

        <div class="location-card">
            <div class="loc-header">${ui.locationLabel} ${curLoc === 8 ? '' : curLoc + ' — '}${t(loc.name)}</div>
            <div class="loc-detail">${t(plant.locationDetail)}</div>
            <div class="loc-move">
                <label class="loc-move-label" for="locPick">${ui.moveTo}</label>
                <select id="locPick" class="loc-select" onchange="setPlantLocation(${plant.id}, this.value)">
                    ${[1, 2, 3, 5, 8].map(n => `<option value="${n}"${n === curLoc ? ' selected' : ''}>${LOC_ICONS[n] || '📍'} ${t(LOCATIONS[n].shortName)}${n === plant.locationNo ? ` ${ui.recommendedSuffix}` : ''}</option>`).join('')}
                </select>
            </div>
            ${isMoved(plant) ? `<div class="loc-moved-note">${ui.movedFrom(t(LOCATIONS[plant.locationNo].name))}</div>` : ''}
        </div>
        ${plant.toxic ? `<div class="tox-card">${ui.toxicWarn}</div>` : ''}

        <div class="info-row">
            <div class="info-label">${ui.light}</div>
            <div class="info-value">${'☀️'.repeat(plant.light)} (${plant.light}/5)</div>
        </div>
        <div class="info-row">
            <div class="info-label">${ui.water}</div>
            <div class="info-value">${'💧'.repeat(plant.water)} (${plant.water}/5)</div>
        </div>
        <div class="info-row">
            <div class="info-label">${ui.humidity}</div>
            <div class="info-value">${'💦'.repeat(plant.humidity)} (${plant.humidity}/4)</div>
        </div>

        <div class="section-title ${plant.textClass}">${ui.intro}</div>
        <div class="section-content">${t(plant.description)}</div>

        <div class="section-title ${plant.textClass}">${ui.lightNeeds}</div>
        <div class="section-content">${t(plant.lightDetail)}</div>

        <div class="section-title ${plant.textClass}">${ui.waterNeeds}</div>
        <div class="section-content">${t(plant.waterDetail)}</div>

        <div class="section-title ${plant.textClass}">${ui.wateringTitle}</div>
        <div id="waterBlock">${waterBlockHtml(plant)}</div>

        <div class="section-title ${plant.textClass}">${ui.seasonNow}</div>
        <div class="section-content">${t(plant.seasonNote)}</div>

        <div class="section-title ${plant.textClass}">${ui.septPlan}</div>
        <div class="section-content">${t(plant.sept)}</div>
        <div class="section-content" style="opacity:0.75">${t(SEPT_ALL)}</div>
        ${alertHtml}

        <div class="section-title ${plant.textClass}">${ui.tips}</div>
        <div class="section-content" style="white-space:pre-line">${t(plant.tips)}</div>

        <div class="section-title ${plant.textClass}">${ui.photos}</div>
        <div class="photo-actions">
            <button class="photo-btn" onclick="capturePhoto(${plant.id}, true)">${ui.takePhoto}</button>
            <button class="photo-btn" onclick="capturePhoto(${plant.id}, false)">${ui.fromAlbum}</button>
        </div>
        <div class="photo-actions" id="photoTools"></div>
        <div class="photo-summary" id="photoSummary"></div>
        <div class="photo-grid" id="photoGrid"></div>
        <div class="photo-empty" style="font-size:0.7rem" id="photoNote"></div>
    `;

    renderPhotoGrid(plant.id);
    document.getElementById('modal').classList.add('show');
};

window.closeModal = function(event) {
    if (event && event.target !== document.getElementById('modal')) return;
    document.getElementById('modal').classList.remove('show');
    currentModalPlantId = null;
    revokeThumbs();
};
