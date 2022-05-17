'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FacultyHiringVenueDetail = new Schema({
  location: String,
  date: Date,
  duration: Number,
  timing: String,
  address: String,
}, {
  timestamps: true,
  collection: 'facultyhiringvenuedetails'
});

FacultyHiringVenueDetail.plugin(paginate);
FacultyHiringVenueDetail.plugin(aggregatePaginate);

module.exports = FacultyHiringVenueDetail;
