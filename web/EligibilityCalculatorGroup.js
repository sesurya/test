'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const eligibilityCalculatorResultModel = new Schema({
  syllabus: String,
  mockTest: String,
  questionPaper: String,
  notification: String,
});

const eligibilityCalculatorEducationModel = new Schema({
  name: String,
});

const EligibilityCalculatorGroup = new Schema({
  name: String,
  result: [eligibilityCalculatorResultModel],
  education: [eligibilityCalculatorEducationModel],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'eligibilitycalculatorgroups'
});

EligibilityCalculatorGroup.plugin(paginate);
EligibilityCalculatorGroup.plugin(aggregatePaginate);

module.exports = EligibilityCalculatorGroup;
