'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const TargetExam = new Schema({
  examName: String,
  gradeValues: Array,
}, {
  collection: 'targetexams',
  timestamps: true
});

TargetExam.plugin(paginate);
TargetExam.plugin(aggregatePaginate);

module.exports = TargetExam;
