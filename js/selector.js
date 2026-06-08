// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ['imagenes/1.webp', 'imagenes/2.webp', 'imagenes/3.webp', 'imagenes/4.webp', 'imagenes/5.webp', 'imagenes/6.webp', 'imagenes/7.webp', 'imagenes/8.webp', 'imagenes/9.webp', 'imagenes/10.webp', 'imagenes/11.webp', 'imagenes/12.webp', 'imagenes/13.webp', 'imagenes/14.webp', 'imagenes/15.webp', 'imagenes/16.webp', 'imagenes/17.webp', 'imagenes/18.webp', 'imagenes/19.webp', 'imagenes/20.webp', 'imagenes/21.webp', 'imagenes/DJI_20260506_173224_935.webp', 'imagenes/DJI_20260506_173234_595.webp', 'imagenes/DJI_20260506_173242_396.webp', 'imagenes/DJI_20260506_173249_868.webp', 'imagenes/DJI_20260506_173256_647.webp', 'imagenes/DJI_20260506_173340_883.webp', 'imagenes/DJI_20260506_173345_144.webp', 'imagenes/DJI_20260506_173347_828.webp', 'imagenes/DJI_20260506_173349_834.webp', 'imagenes/DJI_20260506_173355_074.webp', 'imagenes/DJI_20260506_173407_538.webp', 'imagenes/DJI_20260506_173410_536.webp', 'imagenes/DJI_20260506_173413_641.webp', 'imagenes/DJI_20260506_173418_669.webp', 'imagenes/DJI_20260506_173421_034.webp', 'imagenes/DJI_20260506_173423_813.webp', 'imagenes/DJI_20260506_173429_288.webp', 'imagenes/DJI_20260506_173440_838.webp', 'imagenes/DJI_20260506_173442_442.webp', 'imagenes/DJI_20260506_173443_810.webp', 'imagenes/DJI_20260506_173445_486.webp', 'imagenes/DJI_20260506_173446_734.webp', 'imagenes/DJI_20260506_173609_266.webp', 'imagenes/DJI_20260506_173633_145.webp', 'imagenes/DJI_20260506_173637_808.webp', 'imagenes/DJI_20260506_173643_583.webp', 'imagenes/DJI_20260506_173654_191.webp', 'imagenes/DJI_20260506_173656_032.webp', 'imagenes/DJI_20260506_173657_937.webp', 'imagenes/DJI_20260506_173659_738.webp', 'imagenes/DJI_20260506_173701_121.webp', 'imagenes/DJI_20260506_173702_591.webp', 'imagenes/DJI_20260506_173704_193.webp', 'imagenes/DJI_20260506_173705_963.webp', 'imagenes/DJI_20260506_173707_656.webp', 'imagenes/DJI_20260506_173712_401.webp', 'imagenes/DJI_20260506_173714_437.webp', 'imagenes/DJI_20260506_173718_086.webp', 'imagenes/DJI_20260506_173720_017.webp', 'imagenes/DJI_20260506_173724_085.webp', 'imagenes/DJI_20260506_174908_774.webp', 'imagenes/DJI_20260506_174923_073.webp', 'imagenes/DJI_20260506_174926_448.webp', 'imagenes/DJI_20260506_174942_753.webp', 'imagenes/DJI_20260506_174945_285.webp', 'imagenes/DJI_20260506_174946_486.webp', 'imagenes/DJI_20260506_175043_399.webp', 'imagenes/DJI_20260506_175045_017.webp', 'imagenes/DJI_20260506_175046_596.webp', 'imagenes/DJI_20260506_175048_291.webp', 'imagenes/DJI_20260506_175050_146.webp', 'imagenes/DJI_20260506_175051_275.webp', 'imagenes/DJI_20260506_175053_087.webp', 'imagenes/DJI_20260506_175054_691.webp', 'imagenes/DJI_20260506_175406_985.webp', 'imagenes/DJI_20260506_175411_619.webp', 'imagenes/DJI_20260506_175641_396.webp', 'imagenes/DJI_20260506_175643_477.webp', 'imagenes/DJI_20260506_175646_903.webp', 'imagenes/DJI_20260506_175650_921.webp', 'imagenes/DJI_20260506_175652_406.webp', 'imagenes/DJI_20260506_175654_145.webp', 'imagenes/DJI_20260506_175656_004.webp', 'imagenes/DJI_20260506_175659_113.webp', 'imagenes/DJI_20260506_175700_537.webp', 'imagenes/DJI_20260506_175703_071.webp', 'imagenes/DJI_20260506_175704_408.webp', 'imagenes/DJI_20260506_175706_548.webp', 'imagenes/DJI_20260506_175707_826.webp', 'imagenes/DJI_20260506_175710_176.webp', 'imagenes/DJI_20260506_175712_943.webp', 'imagenes/DJI_20260506_175714_472.webp', 'imagenes/DJI_20260506_175719_678.webp', 'imagenes/DJI_20260506_175720_980.webp', 'imagenes/DJI_20260506_175722_677.webp', 'imagenes/DJI_20260506_175724_385.webp', 'imagenes/DJI_20260506_175726_304.webp', 'imagenes/DJI_20260506_175729_307.webp', 'imagenes/DJI_20260506_175731_704.webp', 'imagenes/DJI_20260506_175732_785.webp', 'imagenes/DJI_20260506_175733_939.webp', 'imagenes/DJI_20260506_175737_677.webp', 'imagenes/DJI_20260506_175738_935.webp', 'imagenes/DJI_20260506_175740_195.webp', 'imagenes/DJI_20260506_175743_107.webp', 'imagenes/DJI_20260506_175747_065.webp', 'imagenes/DJI_20260506_175748_432.webp', 'imagenes/DJI_20260506_175749_691.webp', 'imagenes/DJI_20260506_175751_486.webp', 'imagenes/DJI_20260506_175753_006.webp', 'imagenes/DJI_20260506_175754_936.webp', 'imagenes/DJI_20260506_175756_648.webp', 'imagenes/DJI_20260506_175758_001.webp', 'imagenes/DJI_20260506_175759_472.webp', 'imagenes/DJI_20260506_175801_253.webp', 'imagenes/DJI_20260506_175803_216.webp', 'imagenes/DJI_20260506_175804_779.webp', 'imagenes/DJI_20260506_175806_417.webp', 'imagenes/DJI_20260506_175809_399.webp', 'imagenes/DJI_20260506_175811_166.webp', 'imagenes/DJI_20260506_175813_643.webp', 'imagenes/DJI_20260506_175815_251.webp', 'imagenes/DJI_20260506_175817_273.webp', 'imagenes/DJI_20260506_175820_018.webp', 'imagenes/DJI_20260506_175821_657.webp', 'imagenes/DJI_20260506_175826_964.webp', 'imagenes/DJI_20260506_175828_466.webp', 'imagenes/DJI_20260506_175830_724.webp', 'imagenes/DJI_20260506_175832_200.webp', 'imagenes/DJI_20260506_175835_290.webp', 'imagenes/DJI_20260506_175837_760.webp', 'imagenes/DJI_20260506_175839_130.webp', 'imagenes/DJI_20260506_175842_281.webp', 'imagenes/DJI_20260506_175844_677.webp', 'imagenes/DJI_20260506_175846_957.webp', 'imagenes/DJI_20260506_175850_546.webp', 'imagenes/DJI_20260506_175852_324.webp', 'imagenes/DJI_20260506_175855_810.webp', 'imagenes/DJI_20260506_175901_164.webp', 'imagenes/DJI_20260506_175940_584.webp', 'imagenes/DJI_20260506_175943_941.webp', 'imagenes/DJI_20260506_175945_860.webp', 'imagenes/DJI_20260506_175951_186.webp', 'imagenes/DJI_20260506_175953_178.webp', 'imagenes/DJI_20260506_175955_250.webp', 'imagenes/DJI_20260506_180001_207.webp', 'imagenes/DJI_20260506_180003_304.webp', 'imagenes/DJI_20260506_180005_360.webp', 'imagenes/DJI_20260506_180007_943.webp', 'imagenes/DJI_20260506_180009_845.webp', 'imagenes/DJI_20260506_180011_079.webp', 'imagenes/DJI_20260506_180015_142.webp', 'imagenes/DJI_20260506_180017_051.webp', 'imagenes/DJI_20260506_180019_310.webp', 'imagenes/DJI_20260506_180543_386.webp', 'imagenes/DJI_20260506_180544_511.webp', 'imagenes/DJI_20260506_180553_375.webp', 'imagenes/DJI_20260506_180609_546.webp', 'imagenes/DJI_20260506_180618_276.webp', 'imagenes/DJI_20260506_180622_612.webp', 'imagenes/DJI_20260506_180638_271.webp', 'imagenes/DJI_20260506_180643_323.webp', 'imagenes/DJI_20260506_180644_901.webp', 'imagenes/DJI_20260506_180646_476.webp', 'imagenes/DJI_20260506_180648_858.webp', 'imagenes/DJI_20260506_180650_151.webp', 'imagenes/DJI_20260506_180652_353.webp', 'imagenes/DJI_20260506_183629_599.webp', 'imagenes/DJI_20260506_183631_425.webp', 'imagenes/DJI_20260506_183632_551.webp', 'imagenes/DJI_20260506_183633_792.webp', 'imagenes/DJI_20260506_183638_143.webp', 'imagenes/DJI_20260506_183639_749.webp', 'imagenes/DJI_20260506_183641_386.webp', 'imagenes/DJI_20260506_183642_944.webp', 'imagenes/DJI_20260506_183644_341.webp', 'imagenes/DJI_20260506_183645_889.webp', 'imagenes/DJI_20260506_183650_700.webp', 'imagenes/DJI_20260506_183652_248.webp', 'imagenes/DJI_20260506_183653_896.webp', 'imagenes/DJI_20260506_183656_999.webp', 'imagenes/DJI_20260506_183701_712.webp', 'imagenes/DJI_20260506_183702_908.webp', 'imagenes/DJI_20260506_183704_108.webp', 'imagenes/DJI_20260506_183705_446.webp', 'imagenes/DJI_20260506_183706_540.webp', 'imagenes/DJI_20260506_183709_437.webp', 'imagenes/DJI_20260506_185407_804.webp', 'imagenes/DJI_20260506_185410_761.webp', 'imagenes/DJI_20260506_185428_986.webp', 'imagenes/DJI_20260506_185431_158.webp', 'imagenes/DJI_20260506_185434_265.webp', 'imagenes/DJI_20260506_185441_316.webp', 'imagenes/DJI_20260506_185552_312.webp', 'imagenes/DJI_20260506_185554_983.webp', 'imagenes/DJI_20260506_185556_930.webp', 'imagenes/DJI_20260506_185607_434.webp', 'imagenes/DJI_20260506_185608_769.webp', 'imagenes/DJI_20260506_185613_942.webp', 'imagenes/DJI_20260506_185629_318.webp', 'imagenes/DJI_20260506_185631_129.webp', 'imagenes/DJI_20260506_185634_945.webp', 'imagenes/DJI_20260506_185636_280.webp', 'imagenes/DJI_20260506_185638_920.webp', 'imagenes/DSC_8513.webp', 'imagenes/DSC_8514.webp', 'imagenes/DSC_8515.webp', 'imagenes/DSC_8516.webp', 'imagenes/DSC_8517.webp', 'imagenes/DSC_8518.webp', 'imagenes/DSC_8519.webp', 'imagenes/DSC_8520.webp', 'imagenes/DSC_8521.webp', 'imagenes/DSC_8522.webp', 'imagenes/DSC_8523.webp', 'imagenes/DSC_8524.webp', 'imagenes/DSC_8525.webp', 'imagenes/DSC_8526.webp', 'imagenes/DSC_8527.webp', 'imagenes/DSC_8528.webp', 'imagenes/DSC_8529.webp', 'imagenes/DSC_8530.webp', 'imagenes/DSC_8531.webp', 'imagenes/DSC_8532.webp', 'imagenes/DSC_8533.webp', 'imagenes/DSC_8534.webp', 'imagenes/DSC_8535.webp', 'imagenes/DSC_8536.webp', 'imagenes/DSC_8537.webp', 'imagenes/DSC_8538.webp', 'imagenes/DSC_8539.webp', 'imagenes/DSC_8540.webp', 'imagenes/DSC_8541.webp', 'imagenes/DSC_8542.webp', 'imagenes/DSC_8543.webp', 'imagenes/DSC_8544.webp', 'imagenes/DSC_8545.webp', 'imagenes/DSC_8546.webp', 'imagenes/DSC_8547.webp', 'imagenes/DSC_8548.webp', 'imagenes/DSC_8549.webp', 'imagenes/DSC_8550.webp', 'imagenes/DSC_8551.webp', 'imagenes/DSC_8552.webp', 'imagenes/DSC_8553.webp', 'imagenes/DSC_8554.webp', 'imagenes/DSC_8555.webp', 'imagenes/DSC_8556.webp', 'imagenes/DSC_8557.webp', 'imagenes/DSC_8558.webp', 'imagenes/DSC_8559.webp', 'imagenes/DSC_8560.webp', 'imagenes/DSC_8561.webp', 'imagenes/DSC_8562.webp', 'imagenes/DSC_8563.webp', 'imagenes/DSC_8564.webp', 'imagenes/DSC_8565.webp', 'imagenes/DSC_8566.webp', 'imagenes/DSC_8567.webp', 'imagenes/DSC_8568.webp', 'imagenes/DSC_8569.webp', 'imagenes/DSC_8570.webp', 'imagenes/DSC_8571.webp', 'imagenes/DSC_8572.webp', 'imagenes/DSC_8573.webp', 'imagenes/DSC_8574.webp', 'imagenes/DSC_8575.webp', 'imagenes/DSC_8576.webp', 'imagenes/DSC_8577.webp', 'imagenes/DSC_8578.webp', 'imagenes/DSC_8579.webp', 'imagenes/DSC_8580.webp', 'imagenes/DSC_8581.webp', 'imagenes/DSC_8582.webp', 'imagenes/DSC_8583.webp', 'imagenes/DSC_8584.webp', 'imagenes/DSC_8585.webp', 'imagenes/DSC_8586.webp', 'imagenes/DSC_8587.webp', 'imagenes/DSC_8589.webp', 'imagenes/DSC_8590.webp', 'imagenes/DSC_8591.webp', 'imagenes/DSC_8592.webp', 'imagenes/DSC_8593.webp', 'imagenes/DSC_8594.webp', 'imagenes/DSC_8595.webp', 'imagenes/DSC_8596.webp', 'imagenes/DSC_8597.webp', 'imagenes/DSC_8598.webp', 'imagenes/DSC_8599.webp', 'imagenes/DSC_8600.webp', 'imagenes/DSC_8601.webp', 'imagenes/DSC_8602.webp', 'imagenes/DSC_8603.webp', 'imagenes/DSC_8604.webp', 'imagenes/DSC_8605.webp', 'imagenes/DSC_8606.webp', 'imagenes/DSC_8607.webp', 'imagenes/DSC_8608.webp', 'imagenes/DSC_8609.webp', 'imagenes/DSC_8610.webp', 'imagenes/DSC_8611.webp', 'imagenes/DSC_8612.webp', 'imagenes/DSC_8613.webp', 'imagenes/DSC_8614.webp', 'imagenes/DSC_8615.webp', 'imagenes/DSC_8616.webp', 'imagenes/DSC_8617.webp', 'imagenes/DSC_8618.webp'];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

const STORAGE_KEY = 'xv_kimberli_perez_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains("selected");
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '?')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años — Kimberli Perez',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-kimberli-perez-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '🌸 SELECCIÓN DE FOTOS - XV AÑOS KIMBERLI PEREZ\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        if (typeof sbRegistrarVisita === 'function') sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
