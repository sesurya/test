'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;
const Channel = new Schema({
    name:String,
    formattedName: String,
    description:String,
    createdAt:Date,
    updatedAt:Date,
    createdBy:String,
    updatedBy:String,
    codePrefix:String,
}, {
    timestamps: true,
    collection: 'channels'
});
Channel.plugin(paginate);
Channel.plugin(aggregatePaginate);

module.exports = Channel;