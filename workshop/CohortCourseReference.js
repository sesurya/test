'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortCourseReference = new Schema({
  cohortId: Number,
  courseId: Number,
}, {
  collection: 'cohortcoursereferences',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = cohortCourseReference;
