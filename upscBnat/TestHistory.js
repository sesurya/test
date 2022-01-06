'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const TestHistory = new Schema({
  testName: String,
  gradeGroup: String,
  testVersion: Number,
  activeVersion: Boolean,
  assessmentId: String, // added after Compete to Assess migration
}, {
  collection: 'testhistories'
});

TestHistory.plugin(paginate);
TestHistory.plugin(aggregatePaginate);

module.exports = TestHistory;
