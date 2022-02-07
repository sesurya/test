'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SmsTransaction = new Schema({
  regUserId: { type: String, required: true },
  status: { type: String, required: true },
  error: { type: String, required: true }
}, {
  collection: 'smstransactions',
  timestamps: true
});

SmsTransaction.plugin(paginate);
SmsTransaction.plugin(aggregatePaginate);

module.exports = SmsTransaction;
