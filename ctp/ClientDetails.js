'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientDetails = new Schema({
  uuid: String,
  name: String,
  active: Boolean,
  case: String,
  key: String,
  iv: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = ClientDetails;
