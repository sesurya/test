'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ValidateIp = new Schema({
  hitCount: Number,
  isBlocked: Boolean,
  createdTime: Date,
  type: String,
  ipAddress: String,
}, {
  timestamps: true,
  collection: 'ipcollections'
});

ValidateIp.plugin(paginate);
ValidateIp.plugin(aggregatePaginate);

module.exports = ValidateIp;