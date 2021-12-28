'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SalesforceRegistration = new Schema({
  phoneNumber: Number,
  premiumId: String,
  premiumAssessmentId: String,
  activityName: String,
  activityTime: String,
  assessmentId: String,
  assessmentName: String,
  assessmentGrade: Number,
  assessmentBoard: String,
  assessmentStream: String,
  subjects: [{ type: Object }],
}, {
  collection: 'salesforceregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

SalesforceRegistration.plugin(paginate);
SalesforceRegistration.plugin(aggregatePaginate);

module.exports = SalesforceRegistration;
