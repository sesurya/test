'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ExamDetail = new Schema({
  alertIntervals: Array, // [17hr, 3hr] relative time in hours to exam start time
  assessmentId: String,
  alertTypes: Array, // sms, email
  examId: String,
  examName: { type: String, required: true }, // bnst-ias, bnst-ias-hindi
  examType: String, // competitive
  examStartDateTime: { type: Number, required: true }, // epoch ms
  examStopDateTime: { type: Number, required: true },
  active: Boolean,
  registrationOpen: { type: Number, required: true },
  registrationClose: { type: Number, required: true },
  resultsAnnounced: { type: Number, required: true },
  page: String, // bnst-ias, bnst-ias-hindi
  examMode: String, // biWeekly
  previousExamId: String,
  isLastExam: Boolean,
}, {
  collection: 'examdetails',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

ExamDetail.plugin(paginate);
ExamDetail.plugin(aggregatePaginate);

module.exports = ExamDetail;
