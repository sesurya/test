'use strict';
const commonUserAttributeObject = require('./commonUserAttributes')
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FtcNewRegistration = new Schema({
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

FtcNewRegistration.plugin(paginate);
FtcNewRegistration.plugin(aggregatePaginate);

module.exports = FtcNewRegistration;