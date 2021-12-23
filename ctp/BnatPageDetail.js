'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationMetaData = new Schema({
  _id: false,
  regWindowStartDateTime: Number,
  regWindowStopDateTime: Number,
  pageUrl: String,
});

const gradeMetaData = new Schema({
  gradeValue: [Number],
  gradeGroup: String,
  academicGroup: String,
});

const resultMetaData = new Schema({
  _id: false,
  resultDateTime: Number,
  assessmentReportDateTime: Number,
});

const examData = new Schema({
  testStartDateTime: Number,
  testEndDateTime: Number,
  examDuration: Number,
  examDurationUnit: String,
});

const testMetaData = new Schema({
  _id: false,
  grade: {type: gradeMetaData, required: true},
  registrationData: registrationMetaData,
  resultStats: resultMetaData,
  testData: {type: examData, required: true},
});

const buttonMetadata = new Schema({
  _id: false,
  override: Number,
  displayStatus: String,
  statusCode: Number,
  buttonTitle: {type: [String], required: true},
});

const bandMetadata = new Schema({
  _id: false,
  override: Number,
  displayStatus: String,
  statusCode: Number,
  bandTitle: {type: [String], required: true},
  examDateFormat: String,
  examBandDuration: Number,
  examBandDurationUnit: String,
  examBandDurationResetBy: String,
  resultBandDuration: Number,
  resultBandDurationUnit: String,
  resultBandDurationResetBy: String,
});

const BnatPageDetail = new Schema({
  buttonData: buttonMetadata,
  bandData: bandMetadata,
  registrationData: registrationMetaData,
  resultStats: resultMetaData,
  pageData: Object,
  page: String,
  active: Boolean,
  data: {type: [testMetaData]}
});

module.exports = BnatPageDetail;
