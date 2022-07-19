'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
  templateGroup: String, // registration, forgotPassword, alert1, alert2, OTP
  smsTemplate: String, // SMS Body
  emailTemplateSubject: String, // email subject
  emailTemplateBody: String, // email body
  page: String,
  smsServiceProvider: { type: Number, requried: true }, // 1 Gupshup, 2 Kaleyra, 3 both
}, {
  collection: 'messageTemplates',
  timestamps: true
});

MsgTemplate.plugin(paginate);
MsgTemplate.plugin(aggregatePaginate);

module.exports = MsgTemplate;
