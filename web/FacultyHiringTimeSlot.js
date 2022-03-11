'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FacultyHiringTimeSlot = new Schema({
  location: String,
  timeSlot: String,
  from: Date,
  to: Date,
  isActive: Boolean,
}, {
  timestamps: true,
  collection: 'facultyhiringtimeslots'
});

FacultyHiringTimeSlot.plugin(paginate);
FacultyHiringTimeSlot.plugin(aggregatePaginate);

module.exports = FacultyHiringTimeSlot;
