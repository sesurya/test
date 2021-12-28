'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestHistory = new Schema({
  testName: String,
  gradeGroup: String,
  testVersion: Number,
  activeVersion: Boolean,
});

module.exports = TestHistory;
