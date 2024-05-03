const mongoose = require('mongoose');
const subjectSchema = require('./Subject');

const specializationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subjects: [subjectSchema],
});

module.exports = specializationSchema;