'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registration = new Schema({
  parent_phone_number: { type: Number, required: true },
  moved_poms: String,
  page: String,
  cron_flag: Boolean,
  ls_request_id: String,
  prospect_id: String,
  packages: { type: Array, requried: true },
}, {
  collection: 'registrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = registration;
