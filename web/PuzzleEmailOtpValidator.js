'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleEmailOtpValidatorModel = new Schema({
  email: String,
  requestCounter: Number,
  requestedAt: Date,
  templateName: String,
  otp: Number,
  jwtToken: String,
  isValidated: Boolean,
  isOtpSent: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('puzzlEmailOtpValidators', puzzleEmailOtpValidatorModel);