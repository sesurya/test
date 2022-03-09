'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toppersScholarshipModel = new Schema({
  name: String,
  mobile: String,
  email: String,
  city: String,
  school: String,
  markSheetFileSize: String,
  photo: String,
  photoFileSize: String,
  createdAt: Date,
  updatedAt: Date,
  pageType: String
});

module.exports = mongoose.model('toppersScholarship', toppersScholarshipModel);
