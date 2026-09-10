// MyGreens — the Garden view (all plants as cards).

// ─────────────────────────────────────────────
// Render: grid
// ─────────────────────────────────────────────
function renderGrid() {
    const sorted = [...plants].sort((a, b) =>
        sortBy === 'water' ? b.water - a.water : b.light - a.light
    );

    let html = '';
    sorted.forEach((plant, index) => {
        const st = STATUS[plant.status];
        const loc = LOCATIONS[locOf(plant)];

        const photoSrc = latestPhotoUrls[plant.id] || plant.img;
        html += `
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
                        <div class="location-pill">📍 ${t(loc.shortName)}</div>${cardWaterPill(plant)}${plant.toxic ? '<div class="card-tox">🐾✗</div>' : ''}${photoCounts[plant.id] ? `
                        <div class="location-pill">📷 ${photoCounts[plant.id]}</div>` : ''}
                    </div>
                    <div class="emoji-rating">${'☀️'.repeat(plant.light)}</div>
                    <div class="emoji-rating">${'💧'.repeat(plant.water)}</div>
                </div>
            </div>`;
    });

    document.getElementById('grid').innerHTML = html;
}
