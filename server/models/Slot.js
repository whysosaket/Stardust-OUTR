const mongoose = require('mongoose');


const slotSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor'
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hospital'
    },
    time: {type: Date, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('slot', slotSchema);