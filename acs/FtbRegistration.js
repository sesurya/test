'use strict';
const commonUserAttributeObject = require('./commonUserAttributes')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ftbRegistrationDetails = new Schema({
  userAttributes: commonUserAttributeObject,
  registrationFlag: Number,
  loginFlag: Number,
  userProfileId: String,
  userProfileType: String,
}, {
  collection: 'ftbregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = ftbRegistrationDetails;