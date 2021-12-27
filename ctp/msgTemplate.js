'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
  gradeGroup: String,
  templateGroup: String, // registration, forgotPassword, alert1,, alert2
  timeZoneOffset: Object,
  smsTemplate: String, // SMS Body
  emailTemplateSubject: String, // email subject
  emailTemplateBody: String, // email body
  groupExamDateTime: String, // exam and date and time together for sms
  groupExamDate: String, // exam date for email
  groupExamTime: String, // exam time for email
  landingPage: String,
  smsServiceProvider: Number,
  senderEmailId: String,
});

module.exports = MsgTemplate;
