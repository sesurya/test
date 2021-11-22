'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
  timeZoneOffset: Object,
  smsTemplate: String, // SMS Body
  emailTemplateSubject: String, // email subject
  emailTemplateBody: String, // email body
  smsServiceProvider: Number,
  senderEmailId: String,
  templateId: String
}, {
  collection: 'msgtemplates',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

MsgTemplate.plugin(paginate);
MsgTemplate.plugin(aggregatePaginate);

module.exports = MsgTemplate;
