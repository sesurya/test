'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSquaredIdSchema = new Schema({
  '_id': false,
  '46867': String,
  '24692': String,
  'bnat-premium': String,
});

const examRegistrationAndAttemptSchema = new Schema({
  '_id': false,
  'registrationCount': {type: Number, default: 0},
  'examAttemptCount': {type: Number, default: 0},
});

const examStatsSchema = new Schema({
  '_id': false,
  'bnat': examRegistrationAndAttemptSchema,
  'bnat-k10': examRegistrationAndAttemptSchema,
  'bnat-premium': examRegistrationAndAttemptSchema,
});

const examSchema = new Schema({
  '_id': false,
  'examName': {type: String, required: true}, // bnat, bnat-k10, bnat-premium
  'examStartDateTime': {type: Number, required: true},
  'examStopDateTime': {type: Number, required: true},
  'interestedIn': String, // JEE, NEET, JEE+NEET
});

const registrationDetails = new Schema({
  name: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  emailId: {type: String, required: true},
  userId: {type: String, required: true}, // uuid which will not change for a user
  city: {type: String, required: true},
  state: {type: String, required: true},
  password: String,
  hashedPassword: String,
  grade: {type: Number, required: true}, // this will be updated upon each registration
  gradeGroup: String, // this will be updated upon each registration
  examStatistics: {type: examStatsSchema, required: true}, // this will be updated upon each registration
  examData: {type: examSchema, required: true}, // this will be updated upon each registration
  leadSquaredId: leadSquaredIdSchema,
  lsqStats: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
});

module.exports = mongoose.model('student', registrationDetails);
