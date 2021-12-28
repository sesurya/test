'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const AssessmentIdMapping = new Schema({
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
  collection: 'assessmentidmappings',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',

});

AssessmentIdMapping.plugin(paginate);
AssessmentIdMapping.plugin(mongooseAggregatePaginate);

module.exports =  AssessmentIdMapping;
