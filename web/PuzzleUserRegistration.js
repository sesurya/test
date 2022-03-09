'use strict';

const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const puzzleUserRegistration = new Schema({
  name: String,
  department: String,
  email: String,
  puzzleName: String,
  createdAt: String
});

puzzleUserRegistration.plugin(paginate);
puzzleUserRegistration.plugin(aggregatePaginate);

module.exports = puzzleUserRegistration;//.model('puzzleusers', puzzleUsersRegisterModel);
