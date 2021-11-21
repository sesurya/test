'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpDetails = new Schema({
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

module.exports = otpDetails;
