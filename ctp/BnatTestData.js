'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeData = new Schema({
  gradeValue: Number,
  gradeGroup: String,
  academicGroup: String,
  questionPaperId: Array,
});

const RegistrationMetaData = new Schema({
  regWindowStartDateTime: Date,
  regWindowStopDateTime: Date,
  pageUrl: String,
});

const TestCardData = new Schema({
  color: String,
  hasAppeared: Boolean,
});

const TestMetaData = new Schema({
  testStartDateTime: Date,
  testEndDateTime: Date,
  syllabus: String,
  eligibility: String,
  duration: String,
  testMode: String,
  target: String,
  testCard: TestCardData,
});

const ResultMetaData = new Schema({
  status: String,
  resultDateTime: Date,
  assessmentReportDateTime: Date,
});

const BnatTestData = new Schema({
  testVersion: Number,
  registrationActiveStatus: Boolean,
  testActiveStatus: Boolean,
  button: String,
  grade: GradeData,
  registrationData: RegistrationMetaData,
  testData: TestMetaData,
  resultStats: ResultMetaData,
});

module.exports = BnatTestData;
