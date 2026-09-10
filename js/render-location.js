// MyGreens — the Location view (plants grouped by where they live).

// ─────────────────────────────────────────────
// Render: location view
// ─────────────────────────────────────────────

function renderLocations() {
    const ui = UI[lang];
    const order = [1, 2, 3, 5, 8];
    const moved = movedCount();
    let html = moved
        ? `<div class="loc-reset-bar">
               <span class="loc-reset-text">${ui.movedCount(moved)}</span>
               <button class="photo-btn" onclick="resetLocations()">${ui.locReset}</button>
           </div>`
        : `<div class="loc-reset-bar"><span class="loc-reset-text">${ui.allRecommended}</span></div>`;

    order.forEach(locNo => {
        const loc = LOCATIONS[locNo];
        const inLoc = plants.filter(p => locOf(p) === locNo);
        if (!inLoc.length) return;

        let cards = '';
        inLoc.forEach((plant, index) => {
            const st = STATUS[plant.status];
            const photoSrc = latestPhotoUrls[plant.id] || plant.img;
            cards += `
                <div class="plant-card ${plant.bgClass}${photoSrc ? ' has-photo' : ''}" style="animation-delay:${index * 0.04}s" onclick="openModal(${plant.id})">
                    ${photoSrc ? `<img class="card-photo" src="${photoSrc}" alt="" loading="lazy"><div class="card-scrim"></div>` : ''}
                    <div class="status-dot ${st.dot}"></div>
                    <div class="card-content">
                        <div class="nickname ${plant.textClass}">${plant.nickname}</div>
                        <div class="subtitle ${plant.textClass}">${plant.fullName.en}</div>
                        <div class="short-desc ${plant.textClass}">${t(plant.short)}</div>
                    </div>
                    <div class="emoji-section">
                        <div class="card-pills">
                            <div class="location-pill">${t(st.label)}</div>${isMoved(plant) ? `<div class="card-moved" title="${t(LOCATIONS[plant.locationNo].name)}">↔</div>` : ''}${cardWaterPill(plant)}${plant.toxic ? '<div class="card-tox">🐾✗</div>' : ''}${photoCounts[plant.id] ? `
                            <div class="location-pill">📷 ${photoCounts[plant.id]}</div>` : ''}
                        </div>
                        <div class="emoji-rating">${'☀️'.repeat(plant.light)}</div>
                        <div class="emoji-rating">${'💧'.repeat(plant.water)}</div>
                    </div>
                </div>`;
        });

        html += `
            <div class="loc-section">
                <div class="loc-section-header">
                    <span class="loc-icon">${LOC_ICONS[locNo] || '📍'}</span>
                    <span class="loc-title">${t(loc.name)}</span>
                    <span class="loc-count">${inLoc.length}</span>
                    <span class="loc-sub">${t(loc.sub)}</span>
                </div>
                <div class="loc-grid">${cards}</div>
            </div>`;
    });

    document.getElementById('locationView').innerHTML = html;
}
