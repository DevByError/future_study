// backend/utils/dbconnector.js
const Sequelize = require('sequelize');
require('dotenv').config(); // Load .env file

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT || 'mysql', // Default to postgres or change to 'mysql', 'sqlite', etc.
    omitNull: true,
    logging: false, // Set to true for debugging SQL queries
});

module.exports = sequelize;