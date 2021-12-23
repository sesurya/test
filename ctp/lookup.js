'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lookup = new Schema({
  type: String,
  key: String,
  page: String,
  data: Array
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = mongoose.model('lookup', lookup);