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
  status: {
    type: String,
    enum: ["exam_registered", "exam_attended", 'result_not_published', "result_published"],
    required: true,
    default: "exam_registered"
  },
  notificationDetails: {
    smsCounter: { type: Number, required: true, default: 0 },
    smsStatus: { type: String, required: true, default: 'pending' },
    emailCounter: { type: Number, required: true, default: 0 },
    emailStatus: { type: String, required: true, default: 'pending' }
  },
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
  eoId: { type: String, required: true },
  slotTime: { type: String, required: true },
  isPaidUser: { type: Boolean, required: true },
  password: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  testName: { type: String, required: true },
  centre: String,
  lsqStats: Boolean,
  active: Boolean,
  leadId: String,
  activityId: String,
  psleadId: String,
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
