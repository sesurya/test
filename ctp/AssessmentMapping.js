'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssessmentMapping = new Schema({
  assessmentId: String,
  examType: String,
  examName: String,
  gradeGroup: String,
  interestedIn: String,
  examStartTime: Number,
  examStopTime: Number,
  page: String,
  key: {type: String, required: true},
  tags: Array,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});


module.exports =  AssessmentMapping;
