'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const stateValue = new Schema({
  adminArea: { type: String, required: true },
  city: { type: String },
});

const consentValues = new Schema({
  whatsappOptin: { type: Boolean, required: true },
});

const userAttributeObject = new Schema({
  verifiedMobile: { type: String, required: true },
  unverifiedEmail: String,
  grade: { type: String, required: true },
  name: { type: String, required: true },
  course: { type: String, required: true },
  slugName: { type: String, required: true },
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
  pincode: Number
});

const WorkshopRegistration = new Schema({
  userAttributes: userAttributeObject,
  registrationFlag: Number,
  loginFlag: Number,
  userProfileId: String,
  userProfileType: String,
  workshopType: String,
}, {
  collection: 'workshopregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

WorkshopRegistration.plugin(paginate);
WorkshopRegistration.plugin(aggregatePaginate);

module.exports = WorkshopRegistration;
