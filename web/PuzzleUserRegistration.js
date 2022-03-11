'use strict';

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
}, {
  timestamps: true,
  collection: 'puzzleusers'
});

puzzleUserRegistration.plugin(paginate);
puzzleUserRegistration.plugin(aggregatePaginate);

module.exports = puzzleUserRegistration;
