'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templates = new Schema({
  gradeGroup: String,
  templateTitle: String,
  templateGroup: String,
  smsTemplate: String,
  emailTemplateSubject: String,
  emailTemplateBody: String,
  voiceOtpTemplate: String,
  ivrLoop: Number,
  ivrVoice: String,
  speechRate: String,
}, {
  collection: 'templates',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = templates;
