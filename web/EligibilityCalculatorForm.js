'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EligibilityCalculatorForm = new Schema({
  examName: String,
  category: String,
  education: String,
  benchmarkDisability: String,
  dob: Date,
  numberOfAttempts: Number,
  name: String,
  mobile: Number,

  sourceCampaign: String, // get utm_campaign from url
  sourceMedium: String, // get utm_source from url
  sourceContent: String, // get utm-content from url
  url: String, // actual url
  urlReferrer: String, // referrer url

  createdAt: Date,
  updatedAt: Date,
}, {
  timestamps: true,
  collection: 'eligibilitycalculatorsforms'
});

EligibilityCalculatorForm.plugin(paginate);
EligibilityCalculatorForm.plugin(aggregatePaginate);

module.exports = EligibilityCalculatorForm;
