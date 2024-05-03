const mongoose = require('mongoose');
const specializationSchema = require('./Specialization');

const yearSchema = new mongoose.Schema({
    yearNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    specializations: [specializationSchema],
});

const Year = mongoose.model('Year', yearSchema);
module.exports = Year;