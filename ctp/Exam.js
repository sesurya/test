'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const Exam = new Schema({
  examName: String,
  gradeValues: Array,
},{
    collection : "examlists",
    timestamps : true
});

Exam.plugin(paginate);
Exam.plugin(mongooseAggregatePaginate);

module.exports = Exam;
