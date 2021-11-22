'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
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

MsgTemplate.plugin(paginate);
MsgTemplate.plugin(aggregatePaginate);

module.exports = MsgTemplate;
