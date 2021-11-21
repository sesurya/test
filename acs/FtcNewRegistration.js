'use strict';
const commonUserAttributeObject = require('./commonUserAttributes')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationDetails = new Schema({
  userAttributes: commonUserAttributeObject,
  registrationFlag: Number,
  loginFlag: Number,
  userProfileId: String,
  userProfileType: String,
  class: String,
  exam: String,
  state: String,
}, {
  collection: 'bcasnewregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = registrationDetails;