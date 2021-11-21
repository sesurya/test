'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationDetails = new Schema({
  mobile: { type: String, required: true },
  email: String,
  grade: { type: String, required: true },
  name: { type: String, required: true },
  state: { type: String, required: true },
  url: String,
  stepone: Boolean,
  steptwo: Boolean,
  referrerUrl: String,
  utmSource: String,
  utmCampaign: String,
  gclid: String,
  utmCampaignId: String,
  adid: String,
  adsetId: String,
  fbclid: String,
  utmTerm: String,
  utmMedium: String,
  startTime: String,
  courseType: String,
  iscronjobRan: Boolean,
  activity: Array,
  activities: Array
}, {
  collection: 'whjrregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = registrationDetails;