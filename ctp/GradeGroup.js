'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const GradeGroup = new Schema({
  gradeName: {type: String, required: true},
  gradeValue: {type: Number, required: true},
  gradeGroup: {type: String, required: true},
  page: {type: String, required: true},
  yearProgress: {type: String, required: true},
  landingPage: {type: String, required: true},
  academicGroup: {type: String, required: true},
},{
    collection : "gradegroups",
    timestamps : true
});

GradeGroup.plugin(paginate);
GradeGroup.plugin(mongooseAggregatePaginate);

module.exports = GradeGroup;
