'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateSocialResponsibilityModel = new Schema({
  name: String,
  mobile: Number,
  selector: String,
  emailId: String,
  orgName: String,
  orgWebsite: String,

  sourceCampaign: String,
  sourceMedium: String,
  sourceContent: String,
  url: String,
  urlReferrer: String,

  createdAt: Date,
});

module.exports = mongoose.model('corporateSocialResponsibility', corporateSocialResponsibilityModel);
