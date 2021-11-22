'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const OtpVerification = new Schema({
  phoneNumber: { type: Number, required: true },
  otpValue: Number,
  active: Boolean,
  voiceOtpRetries: Number,
  page: String,
  isVerified: Boolean,
  otpSMSCount: Number,
  initialOTPAttempt: Date,
  otpCreatedTime: Date,
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
