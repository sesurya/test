'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const OtpVerification = new Schema({
  phoneNumber: Number,
  otpValue: Number,
  isVerified: Boolean,
  active: Boolean,
  otpSMSCount: Number,
  initialOTPAttempt: Date,
  otpCreatedTime: Date,
  page: String,
}, {
  collection: 'otpverifications',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

OtpVerification.plugin(paginate);
OtpVerification.plugin(aggregatePaginate);

module.exports = OtpVerification;
