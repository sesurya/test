'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PuzzleEmailOtpValidator = new Schema({
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
}, {
  timestamps: true,
  collection: 'puzzlEmailOtpValidators'
});

PuzzleEmailOtpValidator.plugin(paginate);
PuzzleEmailOtpValidator.plugin(aggregatePaginate);

module.exports = PuzzleEmailOtpValidator;