'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const User = new Schema({
  userLogin: String,
  userPassword: String,
  userEmail: String,
  userRegistered: Date,
  userStatus: Boolean,
  displayName: String,
  appName: String,
});

User.plugin(paginate);
User.plugin(aggregatePaginate);

module.exports = User;//.model('users', usersModel);
