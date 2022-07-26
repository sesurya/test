'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EmailOtpTemplate = new Schema({
  templateGroup: { type: String, required: true, unique:true },
  imageUrl: { type: String },
  emailTemplateSubject: { type: String },
  emailTemplateFirstLine: { type: String },
  senderEmailId: { type: String },
  emailBodyHtml: { type: String },
  createdBy: { type: String },
  updatedBy: { type: String }
}, {
  collection: 'email_otp_templates',
  timestamps: true
});

EmailOtpTemplate.plugin(paginate);
EmailOtpTemplate.plugin(aggregatePaginate);

module.exports = EmailOtpTemplate;