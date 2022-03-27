'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const CorporateSocialResponsibility = new Schema({
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
}, {
  timestamps: true,
  collection: 'corporatesocialresponsibilities'
});

CorporateSocialResponsibility.plugin(paginate);
CorporateSocialResponsibility.plugin(aggregatePaginate);

module.exports = CorporateSocialResponsibility;
