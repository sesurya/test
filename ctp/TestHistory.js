'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const TestHistory = new Schema({
  testName: String,
  gradeGroup: String,
  testVersion: Number,
  activeVersion: Boolean,
},{
    collection : "testhistories",
    timestamps : true
});

TestHistory.plugin(paginate);
TestHistory.plugin(mongooseAggregatePaginate);

module.exports = TestHistory;
