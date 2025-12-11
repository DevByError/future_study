// backend/controllers/academicsController.js
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const moment = require('moment');

// Import Models and setup associations (done in program.js, but need to import here for use)
const University = require('../models/academics/university');
const Program = require('../models/academics/program');

// --- Helper function to format program card data ---
const formatProgramCard = (element, lang) => {
    // Determine language-specific fields
    const nameField = lang === 'ar' ? 'name_ar' : 'name_en';
    const uniNameField = lang === 'ar' ? 'name_ar' : 'name_en';
    const levelField = lang === 'ar' ? 'academic_level_ar' : 'academic_level_en';
    const modeField = lang === 'ar' ? 'study_mode_ar' : 'study_mode_en';

    return {
        id: element.id,
        title: element[nameField],
        university: element.tbluniversity[uniNameField],
        university_logo: element.tbluniversity.logo_path,
        university_location: element.tbluniversity.location_country,
        level: element[levelField],
        mode: element[modeField],
        duration: element.duration_years,
        intakes: element.intakes,
        fees: element.total_fees_myr, // Currency is fixed to MYR for Malaysia
    };
};

// --- CORE PROGRAM SEARCH/FILTER API (For Frontend Cards) ---
exports.getPrograms = async (req, res) => {
    // Default to Malaysia, 'en' language, and no filters
    const { country = 'Malaysia', lang = 'en', uni, level, mode, minFee, maxFee, sortBy = 'name_en' } = req.query;

    const whereProgram = { sts: true };
    const whereUni = { location_country: country, sts: true };

    // 1. Build Filter Conditions
    if (level) whereProgram[lang === 'ar' ? 'academic_level_ar' : 'academic_level_en'] = level;
    if (mode) whereProgram[lang === 'ar' ? 'study_mode_ar' : 'study_mode_en'] = mode;

    if (minFee || maxFee) {
        whereProgram.total_fees_myr = {};
        if (minFee) whereProgram.total_fees_myr[Op.gte] = minFee;
        if (maxFee) whereProgram.total_fees_myr[Op.lte] = maxFee;
    }

    if (uni) whereUni[lang === 'ar' ? 'name_ar' : 'name_en'] = uni;

    try {
        const programs = await Program.findAll({
            where: whereProgram,
            include: [{
                model: University,
                where: whereUni,
                required: true,
            }],
            order: [[sortBy, 'ASC']],
        });

        const formattedPrograms = programs.map(p => formatProgramCard(p, lang));

        res.status(200).send({
            data: { programs: formattedPrograms },
            success: true,
            err: null,
        });

    } catch (err) {
        console.error("Program search error:", err);
        res.status(500).send({ success: false, err: "Failed to fetch programs." });
    }
};

// --- GET PROGRAM DETAILS BY ID (For Program Detail Page) ---
exports.getProgramDetails = async (req, res) => {
    const { id, lang = 'en' } = req.query;

    try {
        const program = await Program.findOne({
            where: { id: id, sts: true },
            include: [{ model: University }],
        });

        if (!program) return res.status(404).send({ success: false, err: 'Program not found.' });

        // Format and send all required details for the program detail page
        res.status(200).send({
            data: {
                id: program.id,
                title: program[lang === 'ar' ? 'name_ar' : 'name_en'],
                university_name: program.tbluniversity[lang === 'ar' ? 'name_ar' : 'name_en'],
                university_info: program.tbluniversity[lang === 'ar' ? 'info_ar' : 'info_en'], // <-- University Info
                academic_level: program[lang === 'ar' ? 'academic_level_ar' : 'academic_level_en'],
                study_mode: program[lang === 'ar' ? 'study_mode_ar' : 'study_mode_en'],
                duration: program.duration_years,
                intakes: program.intakes,
                total_fees: program.total_fees_myr,
                // Add your program detail text fields here
                program_details: program[lang === 'ar' ? 'program_details_ar' : 'program_details_en'],
                // Add other details needed for the dedicated 'fees', 'curriculum' sections, etc.
            },
            success: true,
        });
    } catch (err) {
        console.error("Detail fetch error:", err);
        res.status(500).send({ success: false, err: "Failed to fetch program details." });
    }
};

// --- Admin CRUD Operations (Simplified) ---
exports.postProgramAdd = async (req, res) => {
    const data = req.body;
    try {
        // Validate university ID
        const uni = await University.findByPk(data.uniid);
        if (!uni) return res.status(400).send({ success: false, msg: 'Invalid University ID.' });

        await Program.create({
            id: uuidv4(),
            ...data,
            sts: true,
        });

        res.status(200).send({ msg: 'Program added successfully.', success: true });
    } catch (err) {
        res.status(500).send({ success: false, msg: 'Error adding program.', err });
    }
};
// ... other CRUD functions (Edit, Delete) ...

// --- Helpers for Filter Dropdowns (New) ---
exports.getFilterOptions = async (req, res) => {
    // Get unique list of universities for the dropdown
    const { country = 'Malaysia', lang = 'en' } = req.query;
    const uniField = lang === 'ar' ? 'name_ar' : 'name_en';

    try {
        const universities = await University.findAll({
            where: { location_country: country, sts: true },
            attributes: [uniField],
            group: [uniField],
        });

        // Remove duplicates for universities
        const unique = arr => [...new Set(arr)];
        const universityList = unique(universities.map(u => u[uniField]));

        // Hardcoded levels and modes, but use Arabic if lang is 'ar'
        let levels, modes;
        if (lang === 'ar') {
            levels = unique(['بكالوريوس', 'ماجستير', 'دبلوم', 'سنة تحضيرية']);
            modes = unique(['دوام كامل', 'تعليم عن بعد']);
        } else {
            levels = unique(["Bachelor's", "Master's", 'Diploma', 'Foundation Year']);
            modes = unique(['Full Time', 'Distance Learning']);
        }

        res.status(200).send({
            data: {
                universities: universityList,
                levels,
                modes,
            },
            success: true
        });
    } catch (err) {
        res.status(500).send({ success: false, err: "Failed to fetch filter options." });
    }
};