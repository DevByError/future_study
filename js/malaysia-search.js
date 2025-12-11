// js/malaysia-search.js
const API_BASE = 'http://localhost:3000/api'; // CHANGE THIS IF YOUR BACKEND PORT IS DIFFERENT
const resultsContainer = document.getElementById('programs-results');
let lang = document.documentElement.lang || 'en';

// --- Utility Functions ---

/** Creates the HTML for a single program card (no logo, matches screenshot style). */
const createCardHTML = (program) => {
    const viewDetailsText = lang === 'ar' ? 'عرض التفاصيل' : 'VIEW DETAILS';
    const copyDetailsText = lang === 'ar' ? 'نسخ التفاصيل' : 'COPY DETAILS';
    const uniText = lang === 'ar' ? `جامعة ${program.university}` : program.university;
    const levelText = program.level;
    const modeText = program.mode;
    const durationText = lang === 'ar' ? `مدة الدراسة: ${program.duration} سنوات` : `Duration: ${program.duration} Years`;
    const intakesText = lang === 'ar' ? `موعد الدراسة: ${program.intakes}` : `Intake: ${program.intakes}`;
    const feesText = lang === 'ar' ? `الرسوم الدراسية كاملة: MYR ${Number(program.fees).toLocaleString('en-US')}` : `Total Fees: MYR ${Number(program.fees).toLocaleString('en-US')}`;

    return `
    <div class="program-card">
        <h3 class="program-title">${program.title}</h3>
        <p class="program-university">${uniText}</p>
        <div class="program-badges">
            <span class="badge-info">${levelText}</span>
            <span class="badge-info">${modeText}</span>
        </div>
        <div class="program-details" style="background:#f7f7fa;padding:12px 10px;border-radius:12px;margin:12px 0;">
            <div class="detail-item"><i class="fas fa-calendar-alt"></i> <span>${durationText}</span></div>
            <div class="detail-item"><i class="fas fa-check-square"></i> <span>${intakesText}</span></div>
            <div class="detail-item"><i class="fas fa-wallet"></i> <span class="program-fees">${feesText}</span></div>
        </div>
        <div class="card-actions" style="display:flex;gap:8px;">
            <a href="program-detail.html?id=${program.id}&lang=${lang}" class="btn-primary">${viewDetailsText} <i class="fas fa-info-circle"></i></a>
            <button class="btn-secondary-outline">${copyDetailsText} <i class="fas fa-calendar-alt"></i></button>
        </div>
    </div>
    `;
};

/** Renders the program cards to the DOM. */
const renderPrograms = (programs) => {
    if (programs.length === 0) {
        resultsContainer.className = 'program-grid';
        resultsContainer.innerHTML = `<p style="text-align:center; padding: 40px; font-size: 1.1rem;">${lang === 'ar' ? 'لم يتم العثور على برامج مطابقة.' : 'No matching programs found.'}</p>`;
        return;
    }

    // Always set the correct class for grid layout
    resultsContainer.className = 'program-grid';
    resultsContainer.innerHTML = programs.map(createCardHTML).join('');
};

/** Fetches programs from the backend API based on current filters. */
const fetchPrograms = async () => {
    // 1. Collect filter values based on language
    const uni = lang === 'ar'
        ? document.getElementById('university-filter-ar').value
        : document.getElementById('university-filter-en').value;
    const level = lang === 'ar'
        ? document.getElementById('level-filter-ar').value
        : document.getElementById('level-filter-en').value;
    const mode = lang === 'ar'
        ? document.getElementById('study-system-filter-ar').value
        : document.getElementById('study-system-filter-en').value;
    const minFee = document.getElementById('price-min').value;
    const maxFee = document.getElementById('price-max').value;
    // Map sortBy dropdown value to backend field
    let sortBy = document.getElementById('sort-by').value;
    switch (sortBy) {
        case 'name-asc':
            sortBy = 'name_en';
            break;
        case 'name-desc':
            sortBy = 'name_en_desc';
            break;
        case 'price-asc':
            sortBy = 'total_fees_myr';
            break;
        case 'price-desc':
            sortBy = 'total_fees_myr_desc';
            break;
        case 'level-asc':
            sortBy = 'academic_level_en';
            break;
        default:
            sortBy = 'name_en';
    }
    const keyword = document.getElementById('keyword-search').value; // Basic keyword support

    // 2. Build Query String
    const params = new URLSearchParams({ lang, sortBy, country: 'Malaysia' });
    if (uni) params.append('uni', uni);
    if (level) params.append('level', level);
    if (mode) params.append('mode', mode);
    if (minFee) params.append('minFee', minFee);
    if (maxFee) params.append('maxFee', maxFee);
    if (keyword) params.append('keyword', keyword); // Backend needs to implement keyword search logic

    try {
        const response = await fetch(`${API_BASE}/programs?${params.toString()}`);
        const result = await response.json();

        if (result.success) {
            renderPrograms(result.data.programs);
        } else {
            console.error(result.err);
        }
    } catch (error) {
        console.error('Error fetching programs:', error);
    }
};

/** Populates the filter dropdowns on page load. */
const loadFilterOptions = async () => {
    try {
        const response = await fetch(`${API_BASE}/programs/options?lang=${lang}&country=Malaysia`);
        const result = await response.json();

        // Helper: clear and populate a select
        const populateSelect = (selectId, options) => {
            const select = document.getElementById(selectId);
            if (!select) return;
            select.innerHTML = select.options[0] ? select.options[0].outerHTML : '';
            options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt;
                option.textContent = opt;
                select.appendChild(option);
            });
        };

        if (result.success) {
            const { universities, levels, modes } = result.data;
            if (lang === 'ar') {
                populateSelect('university-filter-ar', universities);
                populateSelect('level-filter-ar', levels);
                populateSelect('study-system-filter-ar', modes);
            } else {
                populateSelect('university-filter-en', universities);
                populateSelect('level-filter-en', levels);
                populateSelect('study-system-filter-en', modes);
            }
        }
    } catch (error) {
        console.error('Error loading filter options:', error);
    }
};

// --- Event Listeners and Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadFilterOptions();
    fetchPrograms(); // Load all programs by default on page load

    // Add listener for Apply Filters button
    document.getElementById('apply-filters').addEventListener('click', fetchPrograms);

    // Add listener for search icon button
    document.querySelector('.search-icon-btn').addEventListener('click', fetchPrograms);

    // Add listener for Reset Filters button
    document.getElementById('reset-filters').addEventListener('click', () => {
        // Simple reset logic
        document.getElementById('university-filter-en').value = '';
        document.getElementById('university-filter-ar').value = '';
        document.getElementById('level-filter-en').value = '';
        document.getElementById('level-filter-ar').value = '';
        document.getElementById('study-system-filter-en').value = '';
        document.getElementById('study-system-filter-ar').value = '';
        document.getElementById('price-min').value = '';
        document.getElementById('price-max').value = '';
        document.getElementById('keyword-search').value = '';
        document.getElementById('sort-by').value = 'name-asc'; // Default sort
        fetchPrograms(); // Re-fetch all programs
    });

    // Language switcher support
    const langSwitcher = document.querySelectorAll('.lang-option');
    langSwitcher.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            lang = btn.getAttribute('data-lang-code');
            document.documentElement.lang = lang;
            document.body.className = lang === 'ar' ? 'lang-ar' : '';
            // Toggle dropdown visibility
            document.querySelectorAll('.lang-dropdown.lang-en').forEach(el => {
                el.style.display = lang === 'en' ? 'block' : 'none';
            });
            document.querySelectorAll('.lang-dropdown.lang-ar').forEach(el => {
                el.style.display = lang === 'ar' ? 'block' : 'none';
            });
            loadFilterOptions();
            fetchPrograms();
        });
    });
});