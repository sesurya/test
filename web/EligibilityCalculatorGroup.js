'use strict';

const mongoose = require('mongoose');
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

const eligibilityCalculatorGroupsModel = new Schema({
  name: String,
  result: [eligibilityCalculatorResultModel],
  education: [eligibilityCalculatorEducationModel],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = mongoose.model('eligibilityCalculatorGroups', eligibilityCalculatorGroupsModel);
