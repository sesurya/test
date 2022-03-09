'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpDetails = new Schema({
  phoneNumber: Number,
  otpValue: Number,
  isVerified: Boolean,
  active: Boolean,
  otpSMSCount: Number,
  otpVerifyCount: Number,
  initialOTPAttempt: Date,
  otpCreatedTime: Date,
  type: String,
  verifyKey: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = mongoose.model('otpstats', otpDetails);