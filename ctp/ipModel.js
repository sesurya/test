'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ipModelSchema = new Schema({
  hitCount: Number,
  isBlocked: Boolean,
  createdTime: Date,
  type: String,
  ipAddress: String,
  phoneNumber: Number,
});

module.exports = mongoose.model('ipcollections', ipModelSchema);
