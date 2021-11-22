'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const OtpVerification = new Schema({
  mobileNumber: { type: Number, required: true },
  otpValue: Number,
  active: Boolean,
}, {
  collection: 'otp-verifications',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

OtpVerification.plugin(paginate);
OtpVerification.plugin(aggregatePaginate);

module.exports = OtpVerification;
