'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateValue = new Schema({
  adminArea: { type: String, required: true },
  city: { type: String },
});

const consentValues = new Schema({
  whatsappOptin: { type: Boolean, required: true },
});

const newUserAttributeObject = new Schema({
  verifiedMobile: { type: String, required: true },
  unverifiedEmail: String,
  grade: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  course: { type: String, required: true },
  slugName: { type: String, required: true },
  targetDate: { type: String, required: true },
  userLocationAttributes: stateValue,
  userConsentAttributes: consentValues,
  url: String,
  referrer_url: String,
  whatsapp: Boolean,
  utmSource: String,
  utmCampaign: String,
  gclid: String,
  utmCampaignId: String,
  utmTerm: String,
  utmMedium: String,
});

const newRegistrationDetails = new Schema({
  userAttributes: newUserAttributeObject,
  registrationFlag: Number,
  loginFlag: Number,
  userProfileId: String,
  userProfileType: String,
  workshopType: String,
}, {
  collection: 'iasworkshopregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = newRegistrationDetails;
