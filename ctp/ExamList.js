'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const ExamList = new Schema({
  examName: String,
  gradeValues: Array,
}, {
  collection: "examlists",
  timestamps: true
});

ExamList.plugin(paginate);
ExamList.plugin(mongooseAggregatePaginate);

module.exports = ExamList;
