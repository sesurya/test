'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const OtpVerification = new Schema({
  phoneNumber: Number,
  otpValue: Number,
  isVerified: Boolean,
  active: Boolean,
  otpSMSCount: Number,
  initialOTPAttempt: Date,
  otpCreatedTime: Date,
}, {
  collection: "otpverifications",
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

OtpVerification.plugin(paginate);
OtpVerification.plugin(mongooseAggregatePaginate);

module.exports = OtpVerification;
