'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const WomensDayPuzzleUser = new Schema({
  name: String,
  department: String,
  email: String,
  puzzleName: String,
  createdAt: String
});

WomensDayPuzzleUser.plugin(paginate);
WomensDayPuzzleUser.plugin(aggregatePaginate);

module.exports = WomensDayPuzzleUser;//.model('womensdaypuzzleusers', womensDayPuzzleUsersModel);
