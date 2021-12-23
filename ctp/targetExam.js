'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TargetExam = new Schema({
  examName: String,
  gradeValues: Array,
});

module.exports = TargetExam;
