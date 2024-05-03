const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    name: String,
    url: String, // URL pointing to the PDF file in cloud storage
    // Add other metadata properties as needed
});

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pdfs: [pdfSchema],  // Array of PDF file objects
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;