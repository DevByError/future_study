// --- Admin University Management ---

exports.getUniversitiesAdmin = async (req, res) => {
    try {
        const universities = await University.findAll({ where: { sts: true } });
        res.status(200).send({ data: universities, success: true });
    } catch (err) {
        res.status(500).send({ success: false, err: 'Failed to fetch universities for admin.' });
    }
};

exports.postUniversityAdd = async (req, res) => {
    const data = req.body;
    try {
        await University.create({
            id: uuidv4(),
            ...data,
            sts: true,
        });
        res.status(200).send({ msg: 'University added successfully.', success: true });
    } catch (err) {
        res.status(500).send({ success: false, msg: 'Error adding university.', err });
    }
};

exports.postUniversityEdit = async (req, res) => {
    const { id, ...data } = req.body;
    try {
        await University.update(data, { where: { id: id } });
        res.status(200).send({ msg: 'University updated successfully.', success: true });
    } catch (err) {
        res.status(500).send({ success: false, msg: 'Error updating university.', err });
    }
};

exports.postUniversityDelete = async (req, res) => {
    try {
        await University.destroy({ where: { id: req.body.id } });
        res.status(200).send({ msg: 'University deleted successfully.', success: true });
    } catch (err) {
        res.status(500).send({ success: false, msg: 'Error deleting university.', err });
    }
};
// backend/controllers/adminController.js
const { v4: uuidv4 } = require('uuid');
const Program = require('../models/academics/program');
const University = require('../models/academics/university');

// Utility to ensure a clean response format
const formatProgram = (p) => ({
    id: p.id,
    uniid: p.uniid,
    name_en: p.name_en,
    name_ar: p.name_ar,
    total_fees_myr: p.total_fees_myr,
    sts: p.sts
});

// --- Admin Program Management ---

exports.getProgramsAdmin = async (req, res) => {
    try {
        const programs = await Program.findAll({ where: { sts: true } });
        res.status(200).send({ data: programs.map(formatProgram), success: true });
    } catch (err) {
        res.status(500).send({ success: false, err: 'Failed to fetch programs for admin.' });
    }
};

exports.postProgramAdd = async (req, res) => {
    const data = req.body;
    try {
        // Basic validation: Check if University ID exists (you'd add more here)
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

exports.postProgramEdit = async (req, res) => {
    const { id, ...data } = req.body;
    try {
        await Program.update(data, { where: { id: id } });
        res.status(200).send({ msg: 'Program updated successfully.', success: true });
    } catch (err) {
        res.status(500).send({ success: false, msg: 'Error updating program.', err });
    }
};

exports.postProgramDelete = async (req, res) => {
    try {
        await Program.destroy({ where: { id: req.body.id } });
        res.status(200).send({ msg: 'Program deleted successfully.', success: true });
    } catch (err) {
        res.status(500).send({ success: false, msg: 'Error deleting program.', err });
    }
};