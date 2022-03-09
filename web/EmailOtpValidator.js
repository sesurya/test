'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailOtpValidatorModel = new Schema({
  email: String,
  requestCounter: Number,
  requestedAt: Date,
  templateName: String,
  otp: Number,
  isValidated: Boolean,
  isOtpSent: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('emailOtpValidators', emailOtpValidatorModel);
