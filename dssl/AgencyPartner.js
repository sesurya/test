'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agencyPartners = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
}, {
  collection: 'agency-partners',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = agencyPartners;

