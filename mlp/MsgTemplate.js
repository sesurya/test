'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgTemplates = new Schema({
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

module.exports = msgTemplates;
