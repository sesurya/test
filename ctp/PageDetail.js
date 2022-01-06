'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const RegistrationMetaData = new Schema({
  _id: false,
  regWindowStartDateTime: Number,
  regWindowStopDateTime: Number,
  pageUrl: String,
});

const GradeMetaData = new Schema({
  gradeValue: [Number],
  gradeGroup: String,
  academicGroup: String,
});

const ResultMetaData = new Schema({
  _id: false,
  resultDateTime: Number,
  assessmentReportDateTime: Number,
});

const ExamData = new Schema({
  testStartDateTime: Number,
  testEndDateTime: Number,
  examDuration: Number,
  examDurationUnit: String,
});

const TestMetaData = new Schema({
  _id: false,
  grade: { type: GradeMetaData, required: true },
  registrationData: RegistrationMetaData,
  resultStats: ResultMetaData,
  testData: { type: ExamData, required: true },
});

const ButtonMetadata = new Schema({
  _id: false,
  override: Number,
  displayStatus: String,
  statusCode: Number,
  buttonTitle: { type: [String], required: true },
});

const BandMetadata = new Schema({
  _id: false,
  override: Number,
  displayStatus: String,
  statusCode: Number,
  bandTitle: { type: [String], required: true },
  examDateFormat: String,
  examBandDuration: Number,
  examBandDurationUnit: String,
  examBandDurationResetBy: String,
  resultBandDuration: Number,
  resultBandDurationUnit: String,
  resultBandDurationResetBy: String,
});

const PageDetail = new Schema({
  buttonData: ButtonMetadata,
  bandData: BandMetadata,
  registrationData: RegistrationMetaData,
  resultStats: ResultMetaData,
  pageData: Object,
  page: String,
  active: Boolean,
  data: { type: [TestMetaData] }
}, {
  collection: "pagedetails",
  timestamps: true
});

PageDetail.plugin(paginate);
PageDetail.plugin(mongooseAggregatePaginate);

module.exports = PageDetail;
