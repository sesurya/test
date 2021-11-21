'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appConfig = new Schema({
  season: { type: Number, required: true },
  alreadyRegisteredSchoolMessage: { type: String, required: true },
}, {
  collection: 'app-configs',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = appConfig;
