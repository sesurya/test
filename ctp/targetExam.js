'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examList = new Schema({
  examName: String,
  gradeValues: Array,
});

module.exports = mongoose.model('examlist', examList);
