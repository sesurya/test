'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
    category: String,
    type: String,
    message: String,
    smsServiceProvider: Number,
    
}, {
    timestamps: true,
    collection: 'msgtemplates'
});

MsgTemplate.plugin(paginate);
MsgTemplate.plugin(aggregatePaginate);

module.exports = MsgTemplate;