'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgTemplates = new Schema({
  templateGroup: String, // OTP
  smsTemplate: String, // SMS Body
}, {
  collection: 'msg-templates',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = msgTemplates;
