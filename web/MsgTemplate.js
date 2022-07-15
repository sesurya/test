'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
    category: { type: String, required: true },
    type: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    smsServiceProvider: { type: Number, required: true },
    createdBy: { type: String },
    updatedBy: { type: String }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    collection: 'msgtemplates'
});

MsgTemplate.plugin(paginate);
MsgTemplate.plugin(aggregatePaginate);

module.exports = MsgTemplate;