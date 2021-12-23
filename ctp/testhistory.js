'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testHistory = new Schema({
  testName: String,
  gradeGroup: String,
  testVersion: Number,
  activeVersion: Boolean,
});

module.exports = mongoose.model('testhistories', testHistory);
