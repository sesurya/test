'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const smsServiceProvider = new Schema({
    providerType: Number
});

module.exports = mongoose.model('smsserviceprovider', smsServiceProvider);