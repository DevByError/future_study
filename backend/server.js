// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const sequelize = require('./utils/dbconnector');

// Import all models so Sequelize creates their tables
require('./models/academics/university');
require('./models/academics/program');
// Add other models here if needed

const apiRoutes = require('./routes/apiRoutes');
// const adminRoutes = require('./routes/adminRoutes'); // Not implemented here

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests from your frontend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static admin files (Admin Panel Page)
app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
app.use('/api', apiRoutes); // Frontend search API

// Database Synchronization and Server Start
sequelize.sync({ force: false }) // 'force: true' will drop tables! Use cautiously.
    .then(() => {
        console.log('Database synced successfully.');
        // --- TEMP: Add dummy data for testing ---
        require('./models/academics/temp_data');
        // --- END TEMP ---

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`Admin panel: http://localhost:${PORT}/admin/programs.html`);
        });
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });