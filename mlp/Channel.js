'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Channel = new Schema({
    name: { type: String, required: true },
    formattedName: { type: String, required: true, unique: true },
    codePrefix: { type: Number, required: true, unique: true },
    description: { type: String, required: true },
    createdBy: { type: String },
    updatedBy:{ type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, 
{
    collection: 'channels',
    timestamps: true
});
Channel.plugin(paginate);
Channel.plugin(aggregatePaginate);

module.exports = Channel;