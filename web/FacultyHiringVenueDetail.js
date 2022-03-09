'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultyHiringVenueDetailsModel = new Schema({
  location: String,
  date: Date,
  duration: Number,
  timing: String,
  address: String,
});

module.exports = mongoose.model('facultyhiringvenuedetails', facultyHiringVenueDetailsModel);
