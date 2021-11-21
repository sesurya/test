'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IpCollectionSchema = new Schema({
  hitCount: Number,
  phoneNumber: Number,
  id: Number,
  isBlocked: Boolean,
  createdTime: Date,
  type: String,
  ipAddress: String,
}, {
  collection: 'ipcollections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = IpCollectionSchema;