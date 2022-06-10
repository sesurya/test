'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
  gradeGroup: String,
  templateGroup: String, // registration, forgotPassword, alert1, alert2, OTP
  smsTemplate: String, // SMS Body
  emailTemplateSubject: String, // email subject
  emailTemplateBody: String, // email body
  groupExamDateTime: String, // exam and date and time together for sms
  groupExamDate: String, // exam date for email
  groupExamTime: String, // exam time for email
  landingPage: String,
  page: String,
  smsServiceProvider: { type: Number, requried: true }, // 1 Gupshup, 2 Kaleyra, 3 both
  eoId: String,
}, {
  collection: 'msgtemplates',
  timestamps: true
});

MsgTemplate.plugin(paginate);
MsgTemplate.plugin(aggregatePaginate);

module.exports = MsgTemplate;
