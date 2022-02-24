'use strict';
const commonftcUsersAttributeObject = require('./commonftcAttributes')
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FreeTrialUsers = new Schema({
  userAttributes: commonftcUsersAttributeObject,
  registrationFlag: Number,
  loginFlag: Number,
  userProfileId: String,
  userProfileType: String,
  
}, {
  collection: 'freetrialusers',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

FreeTrialUsers.plugin(paginate);
FreeTrialUsers.plugin(aggregatePaginate);

module.exports = FreeTrialUsers;