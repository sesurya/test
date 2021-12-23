'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationDetails = new Schema({
  phoneNumber: {type: Number, required: true},
  examName: {type: String, required: true}, // bnat, bnat-k10, bnat-premium
  interestedIn: String, // JEE, NEET, JEE+NEET
  active: Boolean,
  grade: Number,
  gradeGroup: String,
  url: String,
  utmCampaign: String,
  utmSource: String,
  utmContent: String,
  examStartDateTime: {type: Number, required: true},
  resultsAnnouncedDateTime: {type: Number, required: true},
  leadSquaredActivityId: String,
  lsqStats: Boolean,
  examAttempted: {type: Boolean},
}, {
  timestamps: {
    createdAt: 'registrationDate',
    updatedAt: 'modifiedDate',
  },
  minimize: false,
});

module.exports = RegistrationDetails;
