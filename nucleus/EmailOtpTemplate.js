'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EmailOtpTemplate = new Schema({
  templateId: { type: String, required: true, unique:true },      // Campaign Name
  imageUrl: { type: String },                                     // Specific Logo for the campaign if needed
  emailTemplateSubject: { type: String },                         // Specific Subject Line if needed
  emailTemplateFirstLine: { type: String },                       // Specific First Line if needed
  senderEmailId: { type: String },                                // Specific Sender's email if needed
  emailBodyHtml: { type: String },                                // Specific email body if needed
  createdBy: { type: String },
  updatedBy: { type: String }
}, {
  collection: 'email_otp_templates',
  timestamps: true
});

EmailOtpTemplate.plugin(paginate);
EmailOtpTemplate.plugin(aggregatePaginate);

module.exports = EmailOtpTemplate;