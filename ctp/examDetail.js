'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({
  examId: String, // uid
  active: Boolean,
  examType: String, // MockTest, competitive
  examName: {type: String, required: true}, // bnat, bnat-k10, bnat-premium, JeeMain
  examStartDateTime: {type: Number, required: true}, // epoch ms
  examStopDateTime: {type: Number, required: true},
  grade: Array, // [4,5]
  gradeGroup: {type: String, required: true},
  registrationOpen: {type: Number, required: true},
  registrationClose: {type: Number, required: true},
  resultsAnnounced: {type: Number, required: true},
  syllabus: String, // JEE, NEET, JEE+NEET
  page: String, // bnst-ias, jee-mock-test
  alertIntervals: Array, // [17hr, 3hr] relative time in hours to exam start time
  alertTypes: Array, // sms, email
  examMode: String, // daily, weekly, custom
  isLastExam: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});


module.exports = ExamSchema;
