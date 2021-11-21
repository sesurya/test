'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageDetails = new Schema({
  id: { type: Number, required: true },
  status: { type: String, required: true },
  phoneNumber: { type: Number, required: false },
  paymentReferenceId: { type: String, required: false },
  email_Id: { type: String, required: false },
  name: { type: String, required: false },
  cron_flag: { type: Boolean, required: false },
  ls_request_id: { type: String, required: false },
  prospect_id: { type: String, required: false },
  campaign: { type: String, required: false },
}, {
  collection: 'packages',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
});

module.exports = packageDetails;