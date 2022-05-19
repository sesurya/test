'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;


const ExamSchema = new Schema({
  '_id': false,
  'examStartDateTime': { type: Number, required: true },
  'examStopDateTime': { type: Number, required: true },
  'resultsAnnouncedDateTime': { type: Number, required: true },
  'examAttempted': { type: Boolean }
});

const UpscRegistration = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  emailId: { type: String, required: true },
  dob: { type: Date, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  upscCseYear: Number,
  active: Boolean,
  testName: String,
  grade: Number,
  gradeGroup: String,
  url: String,
  utmCampaign: String,
  utmSource: String,
  utmContent: String,
  page: String,
  password: String,
  medium: { type: String, required: true },
  assessmentId: String, // Added after Compete to Assess migration
  userId: String, // uuid
  examData: { type: ExamSchema, required: true },
  leadId: String,
  activityId: String,
  hashedPassword: { type: String, required: true },
  pincode: String,
}, {
  collection: 'upscregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

UpscRegistration.plugin(paginate);
UpscRegistration.plugin(aggregatePaginate);

module.exports = UpscRegistration;
