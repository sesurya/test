'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const womensDayPuzzleUsersModel = new Schema({
  name: String,
  department: String,
  email: String,
  puzzleName: String,
  createdAt: String
});

module.exports = mongoose.model('womensdaypuzzleusers', womensDayPuzzleUsersModel);
