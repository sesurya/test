'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgTemplates = new Schema({
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
  collection: 'msgtemplates',
  timestamps: true
});

module.exports = msgTemplates;