'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeBnatRegistration = new Schema({
  userId: {type: String, required: true},
  name: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  emailId: {type: String, required: true},
  country: String,
  city: String,
  page: String,
  countryCode: String, // used with phone number
  isoCode: String, // iso 2 or 3 character code
  school: String,
  grade: {type: Number, required: true},
  gradeGroup: String,
  interestedIn: {type: String, required: true},
  url: String,
  utmCampaign: String,
  utmSource: String,
  utmContent: String,
  examName: String,
  examStartDateTime: {type: Number, required: true},
  examStopDateTime: {type: Number, required: true},
  timeZone: {type: String, required: true, uppercase: true},
  utcOffset: {type: String, required: true},
  assessmentId: {type: String, required: true},
  password: String,
  hashedPassword: String,
  active: Boolean,
  lsqStats: Boolean,
  leadSquaredId: String,
  leadSquaredActivityId: String,
  registeredOn: Date,
}, {
  timestamps: true,
  versionKey: false, // disables __v
});

module.exports = MeBnatRegistration;
