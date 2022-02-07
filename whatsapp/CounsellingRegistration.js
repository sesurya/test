'use strict';
const {commonLeadLocationAttributes, commonLeadProfileDetails, commonLeadJourneyDetails} = require('./commonLeadAttributes')
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const CounsellingRegistration = new Schema({
    mobile: String,
    grade: String,
    superUserStatus: Boolean,
    leadLocationAttributes: commonLeadLocationAttributes,
    leadProfileDetails: commonLeadProfileDetails,
    leadJourneyDetails: commonLeadJourneyDetails,
    transcriptUrl: String,
    source: String,
    campaignName: String,
    statusFlag: Boolean,
    lsqStats: Boolean,
    optin: Boolean,
    utmSource: String,
    lsqActivityId: String
    
}, {
  collection: 'counsellingregistrations',
  timestamps: {
    updatedAt: 'updated_at',
  },
  minimize: false,
});

CounsellingRegistration.plugin(paginate);
CounsellingRegistration.plugin(aggregatePaginate);

module.exports = CounsellingRegistration;