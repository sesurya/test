'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  pkey: String,
  redirectUrl: String,
}, {
  collection: 'configs',
  timestamps: true
});

module.exports = ConfigSchema;