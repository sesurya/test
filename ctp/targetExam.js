'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamList = new Schema({
  examName: String,
  gradeValues: Array,
});

module.exports = ExamList;
