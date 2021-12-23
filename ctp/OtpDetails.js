'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OtpDetails = new Schema({
  phoneNumber: Number,
  otpValue: Number,
  isVerified: Boolean,
  active: Boolean,
  otpSMSCount: Number,
  initialOTPAttempt: Date,
  otpCreatedTime: Date,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = OtpDetails;
