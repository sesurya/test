'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ExamData = new Schema({
  subjectName: { type: String, required: true },
  examStartDateTime: { type: Date, required: true },
  examStopDateTime: { type: Date, required: true },
  active: Boolean,
});

const ExamDetail = new Schema({
  examId: { type: String, required: true },
  eoId: { type: String, required: true },
  active: Boolean,
  status: { type: String, required: true },
  grade: { type: Number, required: true },
  board: { type: String, required: true },
  stream: { type: String, required: true },
  registrationsStartDateTime: { type: Date, required: true },
  registrationsStopDateTime: { type: Date, required: true },
  resultAnnouncementDateTime: { type: Date, required: true },
  examData: [ExamData],
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
