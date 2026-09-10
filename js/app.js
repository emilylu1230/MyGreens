// MyGreens — controls, view switching, and startup.
// Must load last: the init block at the bottom calls into every other file.

// ─────────────────────────────────────────────
// Controls
// ─────────────────────────────────────────────
window.setSortBy = function(type) {
    sortBy = type;
    if (view !== 'grid') setView('grid');
    syncControls();
    renderGrid();
};

window.setView = function(v) {
    view = v;
    document.getElementById('grid').classList.toggle('hide', v !== 'grid');
    document.getElementById('locationView').classList.toggle('show', v === 'loc');
    document.getElementById('dashboard').classList.toggle('show', v === 'today');
    document.getElementById('chemView').classList.toggle('show', v === 'chem');
    syncControls();
    if (v === 'loc') renderLocations();
    else if (v === 'today') renderDashboard();
    else if (v === 'chem') renderChem();
    else renderGrid();
};

window.toggleLang = function() {
    lang = lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('plantLang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    syncControls();
    syncControlsHeight();
    renderGrid();
    renderLocations();
    renderDashboard();
    renderChem();
    if (currentModalPlantId !== null && document.getElementById('modal').classList.contains('show')) {
        openModal(currentModalPlantId);
    }
};

function syncControls() {
    const ui = UI[lang];
    const bGrid = document.getElementById('btnGrid');
    const bLoc = document.getElementById('btnLoc');
    const bToday = document.getElementById('btnToday');
    const bLight = document.getElementById('btnLight');
    const bWater = document.getElementById('btnWater');

    bGrid.textContent = ui.gridView;
    bLoc.textContent = ui.locView;
    bToday.textContent = ui.todayView;
    bLight.textContent = ui.sortLight;
    bWater.textContent = ui.sortWater;
    document.getElementById('seasonTag').textContent = ui.season;

    bGrid.classList.toggle('active', view === 'grid');
    bGrid.classList.toggle('view', view === 'grid');
    bLoc.classList.toggle('active', view === 'loc');
    bLoc.classList.toggle('view', view === 'loc');
    bToday.classList.toggle('active', view === 'today');
    bToday.classList.toggle('view', view === 'today');

    bLight.classList.toggle('active', sortBy === 'light' && view === 'grid');
    bLight.classList.toggle('light', sortBy === 'light' && view === 'grid');
    bWater.classList.toggle('active', sortBy === 'water' && view === 'grid');
    bWater.classList.toggle('water', sortBy === 'water' && view === 'grid');

    const bChemFooter = document.getElementById('btnChemFooter');
    if (bChemFooter) {
        bChemFooter.textContent = ui.chemView;
        bChemFooter.classList.toggle('active-link', view === 'chem');
    }
    const bLangFooter = document.getElementById('btnLangFooter');
    if (bLangFooter) bLangFooter.textContent = `🌐 ${ui.langBtn}`;

    applyWaterVisibility();
}

// Controls bar is fixed and can wrap to two rows on narrow screens —
// keep main's top padding matched to its real height.
function syncControlsHeight() {
    const bar = document.querySelector('.controls');
    const main = document.querySelector('main');
    if (!bar || !main) return;
    main.style.paddingTop = `${bar.offsetHeight + 10}px`;
}

if (typeof ResizeObserver === 'function') {
    new ResizeObserver(syncControlsHeight).observe(document.querySelector('.controls'));
}
window.addEventListener('resize', syncControlsHeight);
syncControlsHeight();

// init
applyWaterVisibility();
syncControls();
renderGrid();
refreshPhotoCounts().then(() => {
    if (view === 'loc') renderLocations(); else renderGrid();
});
