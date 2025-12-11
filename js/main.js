/* ========================================================= */
/* FILENAME: js/main.js */
/* Contains: Language Switcher, Dynamic Year, Cursor Animation */
/* ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

    /* ========================================================= */
    /* 1. LANGUAGE SWITCHER (Dropdown Logic) */
    /* ========================================================= */
    const langToggleButton = document.getElementById('lang-toggle-button');
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');
    const langDisplay = document.getElementById('current-lang-display');
    const langOptions = document.querySelectorAll('.lang-option');
    // Initialize with stored language or default to English
    let currentLang = localStorage.getItem('websiteLang') || 'en';

    // Utility function to update all text on the page
    const updatePageText = (lang) => {
        document.body.classList.toggle('lang-ar', lang === 'ar');
        document.body.setAttribute('lang', lang);

        // Update elements with data-en/data-ar attributes
        document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
            const newText = el.getAttribute(`data-${lang}`);
            if (newText) el.textContent = newText;
        });

        // Update placeholder texts
        document.querySelectorAll('[data-en-placeholder], [data-ar-placeholder]').forEach(el => {
            const newPlaceholder = el.getAttribute(`data-${lang}-placeholder`);
            if (newPlaceholder) el.placeholder = newPlaceholder;
        });

        // Update page title
        const pageTitle = document.querySelector('title');
        if (pageTitle) pageTitle.textContent = pageTitle.getAttribute(`data-${lang}`);
    };

    // Function to set the website language and update dropdown appearance
    const setLanguage = (lang) => {
        updatePageText(lang);
        localStorage.setItem('websiteLang', lang);
        currentLang = lang;

        // 1. Update the display text on the button
        langDisplay.textContent = lang === 'en' ? 'English (EN)' : 'العربية (AR)';

        // 2. Highlight the currently selected option in the dropdown
        langOptions.forEach(opt => {
            opt.classList.remove('selected');
            if (opt.getAttribute('data-lang-code') === lang) {
                opt.classList.add('selected');
            }
        });

        // Dispatch custom event for other scripts (like education.js) to respond
        document.dispatchEvent(new CustomEvent('langChange', { detail: { lang: lang } }));
    };

    // Initial setup
    setLanguage(currentLang);

    // 1. Toggle Dropdown visibility
    if (langToggleButton && langDropdownMenu) {
        langToggleButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents document click listener from firing immediately
            langDropdownMenu.classList.toggle('open');
        });
    }

    // 2. Hide dropdown when clicking anywhere else on the page
    document.addEventListener('click', () => {
        if (langDropdownMenu) {
            langDropdownMenu.classList.remove('open');
        }
    });

    // 3. Prevent the menu click from closing itself
    if (langDropdownMenu) {
        langDropdownMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 4. Handle Option Selection
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = option.getAttribute('data-lang-code');
            if (newLang !== currentLang) {
                setLanguage(newLang);
            }
            if (langDropdownMenu) {
                langDropdownMenu.classList.remove('open'); // Close after selection
            }
        });
    });


    /* ========================================================= */
    /* 2. DYNAMIC COPYRIGHT YEAR */
    /* ========================================================= */
    const setCopyrightYear = () => {
        const currentYear = new Date().getFullYear();
        const copyrightP = document.querySelector('.copyright-text');

        if (copyrightP) {
            // 1. Get the raw data-en/data-ar string from the attribute
            let contentEn = copyrightP.getAttribute('data-en');
            let contentAr = copyrightP.getAttribute('data-ar');

            // 2. Replace the placeholder year (2025) with the actual current year
            if (contentEn) {
                contentEn = contentEn.replace(/2025/g, currentYear);
                copyrightP.setAttribute('data-en', contentEn);
            }
            if (contentAr) {
                contentAr = contentAr.replace(/2025/g, currentYear);
                copyrightP.setAttribute('data-ar', contentAr);
            }

            // 3. Update the displayed text to reflect the current language and new year
            // We call the main text update function (updatePageText) to handle the display
            updatePageText(currentLang);
        }
    };

    setCopyrightYear();

    /* ========================================================= */
    /* 3. INTERACTIVE IMAGE/VIDEO (Cursor Reaction) */
    /* ========================================================= */
    document.addEventListener('mousemove', (e) => {
        const interactiveArea = document.getElementById('hero-interactive');
        const mover = document.getElementById('hero-mover');

        if (interactiveArea && mover) {
            // Get bounds of the interactive area
            const rect = interactiveArea.getBoundingClientRect();

            // Calculate cursor position relative to the element (0 to 1)
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate percentage for translation
            const xPercentage = (x / rect.width) * 100;
            const yPercentage = (y / rect.height) * 100;

            // Move the 'mover' element inside the interactive area (50 - percentage)
            const tx = 50 - xPercentage;
            const ty = 50 - yPercentage;

            // Apply smooth translation
            mover.style.transform = `translate(${tx}%, ${ty}%)`;
        }
    });

});