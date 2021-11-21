'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateValue = new Schema({
    adminArea: {type: String, required: true},
  });
  
  const consentValues = new Schema({
    whatsappOptin: {type: Boolean, required: true},
  });

  const AdTrackingAttributes = new Schema({
    siteId: String,
    adId:  String,
    adsetId: String,
    pid: String,
    gclid: String,
    fbclId: String,
    clientId:String,
    utmContent:String,
    utmMedium: String,
    utmSource: String,
    campaignName:String,
    campaignId:String,
  })

const commonUserAttributeObject = new Schema({
    verifiedMobile: {type: String, required: true},
    unverifiedEmail: String,
    grade: {type: String, required: true},
    name: {type: String, required: true},
    topicName: String,
    profileId: String,
    profileType: String,
    userLocationAttributes: stateValue,
    userConsentAttributes: consentValues,
    userAdTrackingAttributes: AdTrackingAttributes,
    url: String,
    referrerUrl: String,
    utmSource: String,
    utmCampaign: String,
    gclid: String,
    utmCampaignId: String,
    utmTerm: String,
    utmMedium: String,
    
  });

module.exports = {commonUserAttributeObject};