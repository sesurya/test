'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const gradeData = new Schema({
  gradeValue: Number,
  gradeGroup: String,
  academicGroup: String,
  questionPaperId: Array,
});

const registrationMetaData = new Schema({
  regWindowStartDateTime: Date,
  regWindowStopDateTime: Date,
  pageUrl: String,
});

const testCardData = new Schema({
  color: String,
  hasAppeared: Boolean,
});

const examSlotsDateTime = new Schema({
  slotStartDateTime: Date,
  slotStopDateTime: Date,
  examPaper: String,
});

const testMetaData = new Schema({
  testStartDateTime: Date,
  testEndDateTime: Date,
  examSlots: [examSlotsDateTime],
  syllabus: String,
  eligibility: String,
  duration: String,
  testMode: String,
  target: String,
  testCard: testCardData,
});

const resultMetaData = new Schema({
  status: String,
  resultDateTime: Date,
  assessmentReportDateTime: Date,
});

const MockTestMetaData = new Schema({
  webTestVersion: Number,
  assessmentId: String,
  sampleAssessmentId: String,
  registrationActiveStatus: Boolean,
  testActiveStatus: Boolean,
  button: String,
  grade: gradeData,
  registrationData: registrationMetaData,
  testData: testMetaData,
  resultStats: resultMetaData,
  page: String,
  examId: String,
}, {
  collection: 'mocktestmetadatas',
  timestamps: true
});

MockTestMetaData.plugin(paginate);
MockTestMetaData.plugin(aggregatePaginate);

module.exports = MockTestMetaData;
