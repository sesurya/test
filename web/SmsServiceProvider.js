'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SmsServiceProvider = new Schema({
    providerType: Number
});

SmsServiceProvider.plugin(paginate);
SmsServiceProvider.plugin(aggregatePaginate);

module.exports = SmsServiceProvider;//.model('smsserviceprovider', smsServiceProvider);