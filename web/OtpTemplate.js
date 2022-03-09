'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpTemplate = new Schema({
    category: String,
    type: String,
    message: String,
    smsServiceProvider: Number
});

module.exports = mongoose.model('msgtemplates', otpTemplate);