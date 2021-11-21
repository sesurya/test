'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lookupSchema = new Schema({
  id: String,
  grades: Array,
  boards: Array
}, {
  collection: 'lookups',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = lookupSchema;