'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersModel = new Schema({
  userLogin: String,
  userPassword: String,
  userEmail: String,
  userRegistered: Date,
  userStatus: Boolean,
  displayName: String,
  appName: String,
});

module.exports = mongoose.model('users', usersModel);
