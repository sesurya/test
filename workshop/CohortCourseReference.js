'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const CohortCourseReference = new Schema({
  cohortId: Number,
  courseId: Number,
}, {
  collection: 'cohortcoursereferences',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

CohortCourseReference.plugin(paginate);
CohortCourseReference.plugin(aggregatePaginate);

module.exports = CohortCourseReference;
