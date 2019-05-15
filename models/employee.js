const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    id: {type: Number},
    username: { type: String },
    password: { type: String },
    mailid: { type: String },
    phoneno: { type: String },
});

module.exports = { Employee };