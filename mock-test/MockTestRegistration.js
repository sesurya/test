'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MockTestRegistration = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  emailId: { type: String, required: true },
  dob: { type: Date, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  grade: { type: Number, required: true },
  active: Boolean,
  webTestVersion: Number,
  assessmentId: String, // Given by the Assess Team
  password: String,
  hashedPassword: String,
  url: String,
  utmCampaign: String,
  utmSource: String,
  utmContent: String,
  testName: String,
  examType: String,
  source: String, // bulk registration source
  examStartDateTime: Number,
  examSlotId: String,
  userId: String,
  isPaidUser: Boolean,
  premiumId: String,
}, {
  collection: 'mocktestregistrations',
  timestamps: {
    createdAt: 'registeredOn',
    updatedAt: 'updated_at',
  },
});

MockTestRegistration.plugin(paginate);
MockTestRegistration.plugin(aggregatePaginate);

module.exports = MockTestRegistration;
