'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EmailOtpValidator = new Schema({
  email: String,
  requestCounter: Number,
  requestedAt: Date,
  templateName: String,
  otp: Number,
  isValidated: Boolean,
  isOtpSent: Boolean,
  createdAt: Date,
  updatedAt: Date,
}, {
  timestamps: true,
  collection: 'emailOtpValidators'
});

EmailOtpValidator.plugin(paginate);
EmailOtpValidator.plugin(aggregatePaginate);

module.exports = EmailOtpValidator;
