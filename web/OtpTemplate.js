'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const OtpTemplate = new Schema({
    category: String,
    type: String,
    message: String,
    smsServiceProvider: Number
}, {
    timestamps: true,
    collection: 'msgtemplates'
});

OtpTemplate.plugin(paginate);
OtpTemplate.plugin(aggregatePaginate);

module.exports = OtpTemplate;