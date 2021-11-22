'use strict';
const commonUserAttributeObject = require('./commonUserAttributes')
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FtbRegistration = new Schema({
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

FtbRegistration.plugin(paginate);
FtbRegistration.plugin(aggregatePaginate);

module.exports = FtbRegistration;