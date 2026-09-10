// MyGreens — the Products view (pesticides & fertilisers).

// ─────────────────────────────────────────────
// Render: chemicals view
// ─────────────────────────────────────────────
function chemCardHtml(c) {
    const ui = UI[lang];
    const stLabel = { now: ui.cStNow, ready: ui.cStReady, spring: ui.cStSpring }[c.state];
    const row = (label, val) => val ? `<div class="chem-row"><div class="k">${label}</div><div class="v">${t(val)}</div></div>` : '';
    return `
        <div class="chem-card st-${c.state}">
            <div class="chem-head">
                <span class="chem-name">${t(c.name)}</span>
                ${t(c.brand) ? `<span class="chem-brand">${t(c.brand)}</span>` : ''}
            </div>
            <div class="chem-active">${t(c.active)}</div>
            <div class="chem-tags">
                <span class="chem-tag st-${c.state}">${stLabel}</span>
                <span class="chem-tag ${c.pet === 'safe' ? 'pet-safe' : 'pet-caution'}">${c.pet === 'safe' ? ui.cPetSafe : ui.cPetCaution}</span>
                <span class="chem-tag ${c.winter ? 'win-yes' : 'win-no'}">${c.winter ? ui.cWinterYes : ui.cWinterNo}</span>
            </div>
            <div class="chem-rows">
                ${row(ui.cTarget, c.target)}
                ${row(ui.cUsage, c.usage)}
                ${row(ui.cPlants, c.plants)}
                ${row(ui.cStock, c.stock)}
                ${row(ui.cNote, c.note)}
            </div>
        </div>`;
}

function renderChem() {
    const ui = UI[lang];
    const groups = [
        { key: 'insecticide', title: ui.cInsecticide },
        { key: 'fungicide',   title: ui.cFungicide },
        { key: 'fertiliser',  title: ui.cFertiliser },
    ];

    let html = `
        <div class="chem-banner">
            <div class="cb-title">${ui.chemBannerTitle}</div>
            <div class="cb-text">${ui.chemBannerText}</div>
        </div>`;

    groups.forEach(g => {
        const items = CHEMICALS.filter(c => c.kind === g.key);
        if (!items.length) return;
        html += `<div class="dash-group"><div class="dash-group-title">${g.title} · ${items.length}</div>`;
        items.forEach(c => { html += chemCardHtml(c); });
        html += `</div>`;
    });

    html += `
        <div class="dash-group">
            <div class="dash-group-title">${ui.cSchedule}</div>
            <div class="chem-scroll">
                <table class="chem-table">
                    <thead><tr>
                        <th>${ui.cColUse}</th><th>${ui.cColProduct}</th><th>${ui.cColFreq}</th><th>${ui.cColRotate}</th>
                    </tr></thead>
                    <tbody>
                        ${CHEM_SCHEDULE.map(r => `<tr>
                            <td>${t(r.use)}</td><td>${t(r.product)}</td><td>${t(r.freq)}</td><td>${t(r.rotate)}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="dash-group">
            <div class="dash-group-title">${ui.cSafety}</div>
            <div class="chem-notes">
                ${CHEM_SAFETY.map(n => `<div class="chem-note">${t(n)}</div>`).join('')}
            </div>
        </div>`;

    document.getElementById('chemView').innerHTML = html;
}
