// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin Panel Program CRUD Routes
router.get('/programs', adminController.getProgramsAdmin);
router.post('/program/add', adminController.postProgramAdd);
router.post('/program/edit', adminController.postProgramEdit);
router.post('/program/delete', adminController.postProgramDelete);

// Admin Panel University CRUD Routes (Placeholder for future development)
// router.get('/universities', adminController.getUniversitiesAdmin); 

module.exports = router;