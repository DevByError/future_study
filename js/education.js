/* ========================================================= */
/* DATA COMPONENT: University and Program Data */
/* (Updated with 10 Programs: 7 Malaysian, 3 Rwandan) */
/* ========================================================= */
const universityPrograms = [
    // --- MALAYSIA UNIVERSITIES (7 PROGRAMS) ---
    {
        id: 'inti-adv-dip-acc',
        country: 'malaysia',
        uni_en: 'INTI International University',
        uni_ar: 'جامعة INTI الدولية',
        logo_url: 'images/logos/inti.png',
        location: 'Penang',
        department_en: 'Business',
        department_ar: 'إدارة الأعمال',
        course_en: 'Advanced Diploma in Accounting',
        course_ar: 'الدبلوم المتقدم في المحاسبة',
        level_en: 'Diploma',
        level_ar: 'دبلوم',
        mode_en: 'full-time',
        mode_ar: 'دوام كامل',
        duration_years: 2,
        fee_myr: 36224,
        intake: 'Jan, Jul'
    },
    {
        id: 'apu-bsc-cs',
        country: 'malaysia',
        uni_en: 'Asia Pacific University (APU)',
        uni_ar: 'جامعة آسيا والمحيط الهادئ',
        logo_url: 'images/logos/apu.png',
        location: 'Kuala Lumpur',
        department_en: 'IT & Computing',
        department_ar: 'تكنولوجيا المعلومات والحوسبة',
        course_en: 'BSc (Hons) in Computer Science',
        course_ar: 'بكالوريوس (مرتبة الشرف) في علوم الحاسوب',
        level_en: "Bachelor's",
        level_ar: 'بكالوريوس',
        mode_en: 'full-time',
        mode_ar: 'دوام كامل',
        duration_years: 3,
        fee_myr: 95000,
        intake: 'Feb, Sept'
    },
    {
        id: 'heriot-watt-eng',
        country: 'malaysia',
        uni_en: 'Heriot-Watt University Malaysia',
        uni_ar: 'جامعة هيريوت وات ماليزيا',
        logo_url: 'images/logos/hwum.png',
        location: 'Putrajaya',
        department_en: 'Engineering',
        department_ar: 'الهندسة',
        course_en: 'MEng Mechanical Engineering',
        course_ar: 'ماجستير هندسة ميكانيكية',
        level_en: "Master's",
        level_ar: 'ماجستير',
        mode_en: 'full-time',
        mode_ar: 'دوام كامل',
        duration_years: 4,
        fee_myr: 180000,
        intake: 'Sept'
    },
    {
        id: 'mmu-foundation',
        country: 'malaysia',
        uni_en: 'Multimedia University (MMU)',
        uni_ar: 'جامعة الوسائط المتعددة',
        logo_url: 'images/logos/mmu.png',
        location: 'Cyberjaya',
        department_en: 'Creative Arts',
        department_ar: 'الفنون الإبداعية',
        course_en: 'Foundation in Creative Multimedia',
        course_ar: 'البرنامج التأسيسي في الوسائط المتعددة الإبداعية',
        level_en: 'Foundation',
        level_ar: 'سنة تحضيرية',
        mode_en: 'full-time',
        mode_ar: 'دوام كامل',
        duration_years: 1,
        fee_myr: 20000,
        intake: 'May, Oct'
    },
    {
        id: 'help-phd',
        country: 'malaysia',
        uni_en: 'HELP University',
        uni_ar: 'جامعة HELP',
        logo_url: 'images/logos/help.png',
        location: 'Kuala Lumpur',
        department_en: 'Psychology',
        department_ar: 'علم النفس',
        course_en: 'Doctor of Philosophy (PhD) in Psychology',
        course_ar: 'دكتوراه الفلسفة في علم النفس',
        level_en: 'Doctorate',
        level_ar: 'دكتوراه',
        mode_en: 'research',
        mode_ar: 'بحث',
        duration_years: 3,
        fee_myr: 85000,
        intake: 'Jan, May, Sept'
    },
    {
        id: 'taylors-mba',
        country: 'malaysia',
        uni_en: "Taylor's University",
        uni_ar: "جامعة تايلورز",
        logo_url: 'images/logos/taylors.png',
        location: 'Subang Jaya',
        department_en: 'Business',
        department_ar: 'إدارة الأعمال',
        course_en: 'Master of Business Administration (MBA)',
        course_ar: 'ماجستير في إدارة الأعمال',
        level_en: "Master's",
        level_ar: 'ماجستير',
        mode_en: 'distance learning',
        mode_ar: 'التعلم عن بعد',
        duration_years: 1.5,
        fee_myr: 58000,
        intake: 'Jan, Apr, Jul'
    },
    {
        id: 'ucsi-med',
        country: 'malaysia',
        uni_en: 'UCSI University',
        uni_ar: 'جامعة UCSI',
        logo_url: 'images/logos/ucsi.png',
        location: 'Kuala Lumpur',
        department_en: 'Medicine',
        department_ar: 'الطب',
        course_en: 'Doctor of Medicine (MD)',
        course_ar: 'دكتوراه في الطب',
        level_en: 'Doctorate',
        level_ar: 'دكتوراه',
        mode_en: 'clinical',
        mode_ar: 'سريري',
        duration_years: 5,
        fee_myr: 350000,
        intake: 'Sept'
    },

    // --- RWANDA UNIVERSITIES (3 PROGRAMS, from the capital, Kigali) ---
    {
        id: 'ur-bsc-it',
        country: 'rwanda',
        uni_en: 'University of Rwanda (UR)',
        uni_ar: 'جامعة رواندا',
        logo_url: 'images/logos/ur.png',
        location: 'Kigali',
        department_en: 'IT & Computing',
        department_ar: 'تكنولوجيا المعلومات والحوسبة',
        course_en: 'BSc (Hons) Information Technology',
        course_ar: 'بكالوريوس (مرتبة الشرف) تقنية المعلومات',
        level_en: "Bachelor's",
        level_ar: 'بكالوريوس',
        mode_en: 'full-time',
        mode_ar: 'دوام كامل',
        duration_years: 4,
        fee_myr: 15000,
        intake: 'Sept'
    },
    {
        id: 'auca-mba',
        country: 'rwanda',
        uni_en: 'Adventist University of Central Africa (AUCA)',
        uni_ar: 'جامعة أدفنتست وسط أفريقيا',
        logo_url: 'images/logos/auca.png',
        location: 'Kigali',
        department_en: 'Business',
        department_ar: 'إدارة الأعمال',
        course_en: 'Master of Business Administration (MBA) - Finance',
        course_ar: 'ماجستير إدارة الأعمال - تمويل',
        level_en: "Master's",
        level_ar: 'ماجستير',
        mode_en: 'full-time',
        mode_ar: 'دوام كامل',
        duration_years: 2,
        fee_myr: 25000,
        intake: 'Mar, Sept'
    },
    {
        id: 'ul-law',
        country: 'rwanda',
        uni_en: 'University of Lay Adventists of Kigali (UNILAK)',
        uni_ar: 'جامعة اللاي أدفنتست في كيغالي',
        logo_url: 'images/logos/unilak.png',
        location: 'Kigali',
        department_en: 'Law',
        department_ar: 'القانون',
        course_en: 'Bachelor of Laws (LLB)',
        course_ar: 'بكالوريوس في القانون',
        level_en: "Bachelor's",
        level_ar: 'بكالوريوس',
        mode_en: 'full-time',
        mode_ar: 'دوام كامل',
        duration_years: 4,
        fee_myr: 12000,
        intake: 'Sept'
    }
];

/* ========================================================= */
/* JS COMPONENT: Education Hub Navigation Logic (NEW) */
/* ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const selectorHub = document.getElementById('education-selector-hub');
    const searchHub = document.getElementById('search-hub-container');
    const malaysiaCard = document.getElementById('card-malaysia');
    // You can add logic for Rwanda/Scholarship cards here if needed later

    // Initially hide the search hub, controlled by CSS
    if (searchHub) {
        searchHub.style.display = 'none';
    }

    // Event listener for the "Study in Malaysia" card
    if (malaysiaCard) {
        malaysiaCard.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Hide the initial selector hub
            if (selectorHub) selectorHub.style.display = 'none';

            // 2. Show the search hub
            if (searchHub) searchHub.style.display = 'block';

            // 3. Scroll to the top of the search hub for better UX
            if (searchHub) searchHub.scrollIntoView({ behavior: 'smooth' });

            // RENDER: Also ensure the program cards are rendered on click
            filterAndSortPrograms();
        });
    }


    /* ========================================================= */
    /* JS COMPONENT: Filter and Search Logic (EXISTING) */
    /* ========================================================= */
    const resultsContainer = document.getElementById('programs-results');
    const applyButton = document.getElementById('apply-filters');
    const sortSelect = document.getElementById('sort-by');

    // Helper to get current language from the body class
    const getLang = () => document.body.classList.contains('lang-ar') ? 'ar' : 'en';

    // ------------------------------------
    // 1. Function to Render Program Cards
    // ------------------------------------
    const renderPrograms = (programs) => {
        const lang = getLang();
        resultsContainer.innerHTML = '';

        // Filter programs to only show those for Malaysia (since this search is for Malaysia)
        const malaysiaPrograms = programs.filter(p => p.country === 'malaysia');

        if (malaysiaPrograms.length === 0) {
            resultsContainer.innerHTML = `<p class="no-results" data-en="No programs found matching your criteria." data-ar="لم يتم العثور على برامج مطابقة لمعايير البحث.">No programs found matching your criteria.</p>`;
            document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
                const newText = el.getAttribute(`data-${lang}`);
                if (newText) el.textContent = newText;
            });
            return;
        }

        malaysiaPrograms.forEach(program => {
            const card = document.createElement('div');
            card.classList.add('program-card');

            card.innerHTML = `
                <div class="program-header">
                    <img src="${program.logo_url}" alt="${program.uni_en} Logo" class="uni-logo">
                    <h3 class="course-title" data-en="${program.course_en}" data-ar="${program.course_ar}">${program[`course_${lang}`]}</h3>
                    <p class="university-name" data-en="${program.uni_en}" data-ar="${program.uni_ar}">${program[`uni_${lang}`]}</p>
                </div>
                <div class="program-details">
                    <span class="detail-item"><i class="fas fa-graduation-cap"></i> <span data-en="Level: ${program.level_en}" data-ar="المستوى: ${program.level_ar}">${lang === 'en' ? 'Level: ' : 'المستوى: '}${program[`level_${lang}`]}</span></span>
                    <span class="detail-item"><i class="fas fa-clock"></i> <span data-en="Duration: ${program.duration_years} Years" data-ar="مدة الدراسة: ${program.duration_years} سنوات">${lang === 'en' ? 'Duration: ' : 'مدة الدراسة: '}${program.duration_years} ${lang === 'en' ? 'Years' : 'سنوات'}</span></span>
                    <span class="detail-item"><i class="fas fa-map-marker-alt"></i> <span data-en="Location: ${program.location}" data-ar="الموقع: ${program.location}">${lang === 'en' ? 'Location: ' : 'الموقع: '}${program.location}</span></span>
                </div>
                <div class="program-footer">
                    <p class="total-fee">
                        <span data-en="Total Fee: ${program.fee_myr.toLocaleString()} MYR" data-ar="إجمالي الرسوم: ${program.fee_myr.toLocaleString()} رنجت ماليزي">
                           ${lang === 'en' ? 'Total Fee: ' : 'إجمالي الرسوم: '} ${program.fee_myr.toLocaleString()} ${lang === 'en' ? 'MYR' : 'رنجت ماليزي'}
                        </span>
                    </p>
                    <a href="course-detail.html?id=${program.id}" class="btn-primary show-details" data-en="Show Details" data-ar="عرض التفاصيل">${lang === 'en' ? 'Show Details' : 'عرض التفاصيل'}</a>
                </div>
            `;
            resultsContainer.appendChild(card);
        });
    };

    // ------------------------------------
    // 2. Main Filtering and Sorting Logic
    // ------------------------------------
    const filterAndSortPrograms = () => {
        const keyword = document.getElementById('keyword-search').value.toLowerCase();
        const priceMin = parseFloat(document.getElementById('price-min').value) || 0;
        const priceMax = parseFloat(document.getElementById('price-max').value) || Infinity;
        const mode = document.getElementById('study-system-filter').value;
        const level = document.getElementById('level-filter').value;
        const university = document.getElementById('university-filter').value;
        const sortType = sortSelect.value;
        const lang = getLang();

        // Start with only Malaysian programs
        let filtered = universityPrograms.filter(program => program.country === 'malaysia').filter(program => {

            // Keyword Filter (search in course name, university name, and department)
            const keywordMatch = (program.course_en.toLowerCase().includes(keyword) || program.course_ar.includes(keyword) ||
                program.uni_en.toLowerCase().includes(keyword) || program.uni_ar.includes(keyword) ||
                program.department_en.toLowerCase().includes(keyword) || program.department_ar.includes(keyword));

            // Price Filter
            const priceMatch = program.fee_myr >= priceMin && program.fee_myr <= priceMax;

            // Mode Filter
            const modeMatch = mode === '' || program.mode_en.toLowerCase() === mode;

            // Level Filter
            const levelMatch = level === '' || program.level_en.toLowerCase() === level;

            // University Filter
            const uniMatch = university === '' || program.uni_en === university;

            return keywordMatch && priceMatch && modeMatch && levelMatch && uniMatch;
        });

        // Sorting Logic
        filtered.sort((a, b) => {
            switch (sortType) {
                case 'name-asc':
                    return a[`course_${lang}`].localeCompare(b[`course_${lang}`]);
                case 'name-desc':
                    return b[`course_${lang}`].localeCompare(a[`course_${lang}`]);
                case 'price-asc':
                    return a.fee_myr - b.fee_myr;
                case 'price-desc':
                    return b.fee_myr - a.fee_myr;
                case 'level':
                    // In a real scenario, you'd assign a weight/order to the levels
                    return 0;
                default:
                    return 0;
            }
        });

        renderPrograms(filtered);
    };

    // ------------------------------------
    // 3. Populate Filter Dropdowns (Dynamic Population)
    // ------------------------------------
    const populateFilters = () => {
        // Only use Malaysian programs for the Malaysia search hub filters
        const malaysiaPrograms = universityPrograms.filter(p => p.country === 'malaysia');

        const uniqueUniversities = [...new Set(malaysiaPrograms.map(p => p.uni_en))];
        const uniqueLevels = [...new Set(malaysiaPrograms.map(p => p.level_en))];
        const uniqueModes = [...new Set(malaysiaPrograms.map(p => p.mode_en.toLowerCase()))];

        const uniFilter = document.getElementById('university-filter');
        uniqueUniversities.forEach(uni => {
            const program = malaysiaPrograms.find(p => p.uni_en === uni);
            const option = document.createElement('option');
            option.value = uni;
            option.setAttribute('data-en', uni);
            option.setAttribute('data-ar', program.uni_ar);
            option.textContent = uni; // Set default English text
            uniFilter.appendChild(option);
        });

        // Populate Levels
        const levelFilter = document.getElementById('level-filter');
        uniqueLevels.forEach(level => {
            const option = document.createElement('option');
            option.value = level.toLowerCase();
            option.setAttribute('data-en', level);
            option.setAttribute('data-ar', level); // Ideally map AR levels too
            option.textContent = level;
            levelFilter.appendChild(option);
        });

        // Populate Modes
        const modeFilter = document.getElementById('study-system-filter');
        uniqueModes.forEach(mode => {
            const option = document.createElement('option');
            option.value = mode;
            option.setAttribute('data-en', mode);
            option.setAttribute('data-ar', mode); // Ideally map AR modes too
            option.textContent = mode;
            modeFilter.appendChild(option);
        });
    };

    // ------------------------------------
    // 4. Event Listeners for Filtering
    // ------------------------------------
    if (applyButton && sortSelect) {
        applyButton.addEventListener('click', filterAndSortPrograms);
        sortSelect.addEventListener('change', filterAndSortPrograms);
        document.getElementById('reset-filters').addEventListener('click', () => {
            document.querySelectorAll('.filter-controls input, .filter-controls select').forEach(el => el.value = '');
            filterAndSortPrograms();
        });
    }

    // RENDER: Initial population of filters. Programs will be rendered when the Malaysia card is clicked.
    populateFilters();
});