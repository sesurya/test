'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ToppersScholarship = new Schema({
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
}, {
  timestamps: true,
  collection: 'toppersscholarships'
});

ToppersScholarship.plugin(paginate);
ToppersScholarship.plugin(aggregatePaginate);

module.exports = ToppersScholarship;
