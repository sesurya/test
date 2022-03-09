'use strict';

const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleUsersRegisterModel = new Schema({
  name: String,
  department: String,
  email: String,
  puzzleName: String,
  createdAt: String
});

module.exports = mongoose.model('puzzleusers', puzzleUsersRegisterModel);
