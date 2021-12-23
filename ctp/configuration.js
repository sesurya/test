'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configSchema = new Schema({
  key: {type: String, required: true},
  value: {type: Schema.Types.Mixed, required: true},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = mongoose.model('configuration', configSchema);
