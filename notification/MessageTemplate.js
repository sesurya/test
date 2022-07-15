'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MessageTemplate = new Schema({
  gradeGroup: { type: String, required: true },
  templateTitle: { type: String, required: true },
  templateGroup: { type: String, required: true, unique:true },
  smsTemplate: { type: String, required: true },
  emailTemplateSubject: { type: String, required: true },
  emailTemplateBody: { type: String, required: true },
  voiceOtpTemplate: { type: String, required: true },
  ivrLoop: { type: Number, required: true },
  ivrVoice: { type: String, required: true },
  speechRate: { type: String, required: true },
  provider: { type: String, required: true },
  createdBy: { type: String },
  updatedBy: { type: String }
}, {
  collection: 'msgtemplates',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
});

MessageTemplate.plugin(paginate);
MessageTemplate.plugin(aggregatePaginate);

module.exports = MessageTemplate;