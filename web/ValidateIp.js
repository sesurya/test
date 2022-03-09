'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ValidateIpModels = new Schema({
  hitCount: Number,
  isBlocked: Boolean,
  createdTime: Date,
  type: String,
  ipAddress: String,
});

module.exports = mongoose.model('ipcollections', ValidateIpModels);