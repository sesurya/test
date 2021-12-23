'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginDetails = new Schema({
  phoneNumber: {type: Number, required: true},
  password: {type: String, required: true},
  prospectID: String,
  testName: String,
  testVersion: Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = LoginDetails;
