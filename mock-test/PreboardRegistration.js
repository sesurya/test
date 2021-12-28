'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PreboardRegistration = new Schema({
  userId: String, // uuid
  phoneNumber: { type: Number, required: true },
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  url: { type: String, required: true },
  utmCampaign: { type: String, required: true },
  utmSource: { type: String, required: true },
  utmContent: { type: String, required: true },
  grade: { type: Number, required: true },
  board: { type: String, required: true },
  stream: String, // CBSE, ICSE, ISC
  state: { type: String, required: true },
  city: { type: String, required: true },
  examId: { type: String, required: true },
  slotTime: { type: String, required: true },
  isPaidUser: { type: Boolean, required: true },
  password: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  testName: { type: String, required: true },
  lsqStats: Boolean,
  active: Boolean,
  leadId: String,
  activityId: String,
  premiumId: String,
  profileId: String,
  salesForceId: String,
}, {
  collection: 'preboardregistrations',
  timestamps: {
    createdAt: 'registeredOn',
    updatedAt: 'updated_at',
  },
});

PreboardRegistration.plugin(paginate);
PreboardRegistration.plugin(aggregatePaginate);

module.exports = PreboardRegistration;
