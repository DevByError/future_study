// js/program-detail-renderer.js

const API_BASE = 'http://localhost:3000/api'; // CHANGE THIS IF YOUR BACKEND PORT IS DIFFERENT
const urlParams = new URLSearchParams(window.location.search);
const programId = urlParams.get('id');
let lang = urlParams.get('lang') || document.documentElement.lang || 'en';

const fetchDataAndRender = async () => {
    if (!programId) {
        document.getElementById('detail-title').textContent = 'Error: Program ID missing.';
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/programs/details?id=${programId}&lang=${lang}`);
        const result = await response.json();

        if (!result.success) {
            document.getElementById('detail-title').textContent = result.err || 'Program not found.';
            return;
        }

        const data = result.data;
        const uniInfo = lang === 'ar' ? data.university_info : data.university_info; // Use selected lang info
        const programDetails = lang === 'ar' ? data.program_details : data.program_details;

        // 1. Populate Hero/Banner
        document.getElementById('page-title').textContent = data.title;
        document.getElementById('detail-title').textContent = data.title;
        document.getElementById('detail-university').textContent = data.university_name;

        // 2. Populate University Info Section
        document.getElementById('uni-info-text').innerHTML = uniInfo.replace(/\n/g, '<br>');

        // 3. Populate Program Overview
        document.getElementById('program-details-text').innerHTML = programDetails.replace(/\n/g, '<br>');

        // 4. Populate Quick Facts/Sidebar (Simplified)
        document.getElementById('quick-facts-list').innerHTML = `
            <p>${lang === 'ar' ? 'المستوى' : 'Level'}: ${data.academic_level}</p>
            <p>${lang === 'ar' ? 'نظام الدراسة' : 'Study Mode'}: ${data.study_mode}</p>
            <p>${lang === 'ar' ? 'مدة الدراسة' : 'Duration'}: ${data.duration} ${lang === 'ar' ? 'سنوات' : 'Years'}</p>
            <p>${lang === 'ar' ? 'مواعيد القبول' : 'Intakes'}: ${data.intakes}</p>
        `;

        // 5. Populate Fees Section
        document.getElementById('total-fees-display').textContent = `${data.total_fees.toLocaleString('en-US')} MYR`;

        // Set the language on the page for correct RTL display
        document.documentElement.lang = lang;
        document.body.className = lang === 'ar' ? 'lang-ar' : '';

    } catch (error) {
        console.error('Error rendering program details:', error);
        document.getElementById('detail-title').textContent = 'Error loading details.';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetchDataAndRender();

    // Make APPLY NOW button go to contact.html with lang param
    const applyBtn = document.querySelector('#detail-apply-cta .btn-primary');
    if (applyBtn) {
        applyBtn.addEventListener('click', function (e) {
            e.preventDefault();
            let url = 'contact.html';
            if (lang) {
                url += '?lang=' + encodeURIComponent(lang);
            }
            window.location.href = url;
        });
    }

    // Language dropdown toggle logic
    const langToggleBtn = document.getElementById('lang-toggle-button');
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');
    const currentLangDisplay = document.getElementById('current-lang-display');
    const langSwitcher = document.querySelectorAll('.lang-option');

    // Set current language label and highlight
    function updateLangUI() {
        if (currentLangDisplay) {
            if (lang === 'ar') {
                currentLangDisplay.textContent = 'العربية (AR)';
            } else {
                currentLangDisplay.textContent = 'English (EN)';
            }
        }
        langSwitcher.forEach(btn => {
            if (btn.getAttribute('data-lang-code') === lang) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
    }
    updateLangUI();

    if (langToggleBtn && langDropdownMenu) {
        langToggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            langDropdownMenu.classList.toggle('open');
        });
        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!langDropdownMenu.contains(e.target) && e.target !== langToggleBtn) {
                langDropdownMenu.classList.remove('open');
            }
        });
    }

    // Language switcher support
    langSwitcher.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            lang = btn.getAttribute('data-lang-code');
            // Reload page with new lang param, keep program id
            const params = new URLSearchParams(window.location.search);
            params.set('lang', lang);
            window.location.search = params.toString();
        });
        // Add hover effect for non-selected option
        btn.addEventListener('mouseenter', function () {
            if (!btn.classList.contains('selected')) {
                btn.classList.add('hovered');
            }
        });
        btn.addEventListener('mouseleave', function () {
            btn.classList.remove('hovered');
        });
    });
});