const mongoose = require('mongoose');

const partDetailsSchema = new mongoose.Schema({
    partNumber: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PartDetails', partDetailsSchema);