// backend/models/academics/university.js
const Sequelize = require('sequelize');
const sequelize = require('../../utils/dbconnector');

const university = sequelize.define('tbluniversity', {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true },
    name_en: { type: Sequelize.STRING, allowNull: false },
    name_ar: { type: Sequelize.STRING, allowNull: false },
    location_country: { type: Sequelize.STRING, allowNull: false }, // Malaysia, Rwanda
    logo_path: { type: Sequelize.STRING, allowNull: false },
    info_en: { type: Sequelize.TEXT, allowNull: false }, // "Information about UCSI University"
    info_ar: { type: Sequelize.TEXT, allowNull: false },
    sts: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
});

module.exports = university;