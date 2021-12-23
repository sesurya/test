'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationDetails = new Schema({
  userId: {type: String, required: true},
  name: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  emailId: {type: String, required: true},
  city: String,
  state: String,
  page: String,
  url: String,
  utmCampaign: String,
  utmSource: String,
  utmContent: String,
  prepStatus: String,
  prepStatusDisplayName: String,
  streamDisplayName: String,
  streamValue: String,
  testName: String,
  examStartDateTime: {type: Number, required: true},
  assessmentId: {type: String, required: true},
  examAttempted: Boolean,
  password: String,
  hashedPassword: String,
  active: Boolean,
  lsqStatus: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
});

module.exports = mongoose.model('gateregistrations', registrationDetails);
