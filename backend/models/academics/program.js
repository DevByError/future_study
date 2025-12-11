// backend/models/academics/program.js
const Sequelize = require('sequelize');
const sequelize = require('../../utils/dbconnector');
const university = require('./university'); // Import University model

const program = sequelize.define('tblprogram', {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true },
    uniid: { type: Sequelize.UUID, allowNull: false }, // Foreign key to University
    name_en: { type: Sequelize.STRING, allowNull: false },
    name_ar: { type: Sequelize.STRING, allowNull: false },
    academic_level_en: { type: Sequelize.STRING, allowNull: false }, // Bachelor's, Diploma, Foundation Year
    academic_level_ar: { type: Sequelize.STRING, allowNull: false },
    study_mode_en: { type: Sequelize.STRING, allowNull: false }, // Full Time, Distance Learning
    study_mode_ar: { type: Sequelize.STRING, allowNull: false },
    duration_years: { type: Sequelize.DECIMAL(4, 1), allowNull: false },
    intakes: { type: Sequelize.STRING, allowNull: false }, // e.g., 'Jan, May, Sep'
    total_fees_myr: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    // Simplified structure for the detail page
    program_details_en: { type: Sequelize.TEXT, allowNull: true },
    program_details_ar: { type: Sequelize.TEXT, allowNull: true },
    sts: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
});

// Relationships
university.hasMany(program, { foreignKey: 'uniid', onDelete: 'RESTRICT', onUpdate: 'RESTRICT' });
program.belongsTo(university, { foreignKey: 'uniid', onDelete: 'RESTRICT', onUpdate: 'RESTRICT' });

module.exports = program;