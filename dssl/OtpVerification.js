'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpDetails = new Schema({
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

module.exports = otpDetails;
