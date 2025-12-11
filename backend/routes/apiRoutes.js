// backend/routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const academicsController = require('../controllers/academicsController');

// --- Routes for Frontend Search Page ---

// Get data for all filter dropdowns (Universities, Levels, Modes)
router.get('/programs/options', academicsController.getFilterOptions);

// Get filtered and sorted list of programs for the cards page
// Example: /api/programs?country=Malaysia&level=Bachelor's&minFee=50000
router.get('/programs', academicsController.getPrograms);

// Get full details for a single program card
// Example: /api/programs/details?id=uuid-12345
router.get('/programs/details', academicsController.getProgramDetails);

// --- Routes for Admin Panel (Basic CRUD TBD) ---
// Note: We're skipping the chktoken/chkrole for this simple example

router.post('/programs/add', academicsController.postProgramAdd);
// ... add edit/delete routes here

module.exports = router;