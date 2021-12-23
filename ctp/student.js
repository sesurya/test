'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadSquaredIdSchema = new Schema({
  '_id': false,
  '46867': String,
  '24692': String,
  'bnat-premium': String,
});

const ExamRegistrationAndAttemptSchema = new Schema({
  '_id': false,
  'registrationCount': {type: Number, default: 0},
  'examAttemptCount': {type: Number, default: 0},
});

const ExamStatsSchema = new Schema({
  '_id': false,
  'bnat': ExamRegistrationAndAttemptSchema,
  'bnat-k10': ExamRegistrationAndAttemptSchema,
  'bnat-premium': ExamRegistrationAndAttemptSchema,
});

const ExamSchema = new Schema({
  '_id': false,
  'examName': {type: String, required: true}, // bnat, bnat-k10, bnat-premium
  'examStartDateTime': {type: Number, required: true},
  'examStopDateTime': {type: Number, required: true},
  'interestedIn': String, // JEE, NEET, JEE+NEET
});

const RegistrationDetails = new Schema({
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
  examStatistics: {type: ExamStatsSchema, required: true}, // this will be updated upon each registration
  examData: {type: ExamSchema, required: true}, // this will be updated upon each registration
  leadSquaredId: LeadSquaredIdSchema,
  lsqStats: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
});

module.exports = RegistrationDetails;
