'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gradeGroups = new Schema({
  gradeName: { type: String, required: true },
  gradeValue: { type: Number, required: true },
  gradeGroup: { type: String, required: true },
  page: { type: String, required: true },
  yearProgress: { type: String, required: true },
  landingPage: { type: String, required: true },
  academicGroup: { type: String, required: true },
  isActive: Boolean
}, {
  collection: 'gradegroups',
  timestamps: true
});

module.exports = gradeGroups