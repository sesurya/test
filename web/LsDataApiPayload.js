'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const LsDataApiPayload = new Schema({
  payload: Array,
  lsAccount: Number,
  lsqStats: Boolean,
  formName: String,

}, {
  timestamps: {
    createdAt: Date,
    updatedAt: Date,
  },
  collection: 'lsdataapipayloads'
});

LsDataApiPayload.plugin(paginate);
LsDataApiPayload.plugin(aggregatePaginate);

module.exports = LsDataApiPayload;
