'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ExamDetail = new Schema({
  examId: String,
  assessmentId: String,
  registrationOpenDateTime: { type: Date, required: true },
  registrationCloseDateTime: { type: Date, required: true },
  examStartDateTime: Date,
  examStopDateTime: Date,
  examSlots: { type: String, required: true },
  resultDateTime: { type: Date, required: true },
  isFull: Boolean,
  maxRegistrationLimit: { type: Number, required: true },
  status: { type: Number, required: true }, // 0(registration open), 1(registration close), 2(results announced)
});

const ExamSlot = new Schema({
  grade: { type: Array, required: true }, // [11, 12, 13]
  gradeGroup: { type: Array, required: true }, // ['Class_11', 'Class_12_13']
  testName: { type: String, required: true },
  examDetails: [ExamDetail],
  active: Boolean,
}, {
  collection: 'examslots',
  timestamps: true
});

ExamSlot.plugin(paginate);
ExamSlot.plugin(aggregatePaginate);

module.exports = ExamSlot;
