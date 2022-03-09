'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultHiringTimeSlotModel = new Schema({
  location: String,
  timeSlot: String,
  from: Date,
  to: Date,
  isActive: Boolean,
});

module.exports = mongoose.model('facultyhiringtimeslot', facultHiringTimeSlotModel);
