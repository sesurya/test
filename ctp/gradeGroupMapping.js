'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeGroupMapping = new Schema({
  gradeName: {type: String, required: true},
  gradeValue: {type: Number, required: true},
  gradeGroup: {type: String, required: true},
  page: {type: String, required: true},
  yearProgress: {type: String, required: true},
  landingPage: {type: String, required: true},
  academicGroup: {type: String, required: true},
  isPremium: Boolean,
  examType: {type: String, required: true},
  examName: {type: String, required: true},
});

module.exports = GradeGroupMapping;
