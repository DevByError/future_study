// backend/models/academics/temp_data.js
const { v4: uuidv4 } = require('uuid');
const University = require('./university');
const Program = require('./program');

const populateDatabase = async () => {
    // Check if data already exists
    const uniCount = await University.count();
    if (uniCount > 0) return;

    // 1. Create Universities
    const ucsiId = uuidv4();
    const intiId = uuidv4();
    const apuId = uuidv4();

    await University.bulkCreate([
        { id: ucsiId, name_en: 'UCSI University', name_ar: 'جامعة يو سي إس آي', location_country: 'Malaysia', logo_path: 'ucsi.png', info_en: 'UCSI is a top-ranked private university in Malaysia...', info_ar: 'جامعة يو سي إس آي هي جامعة خاصة رائدة في ماليزيا...' },
        { id: intiId, name_en: 'INTI International University', name_ar: 'جامعة إنتي الدولية', location_country: 'Malaysia', logo_path: 'inti.png', info_en: 'INTI has a long history of academic excellence...', info_ar: 'تتمتع جامعة إنتي بتاريخ طويل من التميز الأكاديمي...' },
        { id: apuId, name_en: 'Asia Pacific University (APU)', name_ar: 'جامعة آسيا والمحيط الهادئ (APU)', location_country: 'Malaysia', logo_path: 'apu.png', info_en: 'APU is a leading technological university...', info_ar: 'APU هي جامعة تكنولوجية رائدة...' },
    ]);

    // 2. Create Programs
    await Program.bulkCreate([
        {
            id: uuidv4(), uniid: ucsiId,
            name_en: "BCA (Hons) in Animated Graphics Design - Kuala Lumpur", name_ar: "BCA (مع مرتبة الشرف) تصميم الرسوم المتحركة ثلاثية الأبعاد - كوالالمبور",
            academic_level_en: "Bachelor's", academic_level_ar: "بكالوريوس", study_mode_en: "Full Time", study_mode_ar: "دوام كامل",
            duration_years: 3.0, intakes: "Jan, May, Sep", total_fees_myr: 77914.00,
            program_details_en: "Details for BCA program at UCSI...", program_details_ar: "تفاصيل برنامج BCA في UCSI...",
        },
        {
            id: uuidv4(), uniid: intiId,
            name_en: "Advanced Diploma in Accounting - Penang", name_ar: "الدبلوم المتقدم في المحاسبة - بينانج",
            academic_level_en: "Diploma", academic_level_ar: "دبلوم", study_mode_en: "Full Time", study_mode_ar: "دوام كامل",
            duration_years: 2.0, intakes: "Jan, Apr, Jul", total_fees_myr: 36224.00,
            program_details_en: "Details for Diploma program at INTI...", program_details_ar: "تفاصيل برنامج الدبلوم في INTI...",
        },
        {
            id: uuidv4(), uniid: apuId,
            name_en: "Foundation in Computing (ODL)", name_ar: "أساسيات الحوسبة (ODL)",
            academic_level_en: "Foundation Year", academic_level_ar: "سنة تحضيرية", study_mode_en: "Distance Learning", study_mode_ar: "التعلم عن بعد",
            duration_years: 1.0, intakes: "May, Sep", total_fees_myr: 19800.00,
            program_details_en: "Details for Foundation program at APU...", program_details_ar: "تفاصيل برنامج السنة التأسيسية في APU...",
        },
    ]);

    console.log("Dummy data populated.");
};

// Execute if running the server
if (process.env.NODE_ENV !== 'production') {
    populateDatabase();
}