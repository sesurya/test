'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MessageTemplate = new Schema({
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

MessageTemplate.plugin(paginate);
MessageTemplate.plugin(aggregatePaginate);

module.exports = MessageTemplate;