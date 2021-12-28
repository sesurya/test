'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const GradeGroup = new Schema({
  gradeName: { type: String, required: true },
  gradeValue: { type: Number, required: true },
  gradeGroup: { type: String, required: true },
  page: { type: String, required: true },
}, {
  collection: 'gradegroups'
});

GradeGroup.plugin(paginate);
GradeGroup.plugin(aggregatePaginate);

module.exports = GradeGroup;
