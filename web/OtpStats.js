'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const OtpStats = new Schema({
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
  collection: 'otpstats'
});

OtpStats.plugin(paginate);
OtpStats.plugin(aggregatePaginate);

module.exports = OtpStats;