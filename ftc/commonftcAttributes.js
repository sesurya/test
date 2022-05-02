'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateValue = new Schema({
    adminArea: {type: String, required: true},
  });

const consentValues = new Schema({
    whatsappOptin: Boolean,
});

const commonftcUsersAttributeObject = new Schema({
    verifiedMobile: {type: String, required: true},
    unverifiedEmail: String,
    grade: {type: String, required: true},
    name: {type: String, required: true},
    userLocationAttributes: stateValue,
    userConsentAttributes: consentValues,
    whatsapp: Boolean,
    url: String,
    referrerUrl: String,
    utmSource: String,
    utmCampaign: String,
    gclid: String,
    utmCampaignId: String,
    utmTerm: String,
    utmMedium: String,
    
  });

module.exports = {commonftcUsersAttributeObject};