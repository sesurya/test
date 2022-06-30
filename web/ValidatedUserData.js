'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ValidatedUserData = new Schema({
  type: String,
  name: String,
  mobile: String,
  email: String,
  grade: String,
  city: String,
  class: String,
  lsrequestid: String,
  prospectid: String,
  categoryHistory: String,
  url: String,
  sessionId: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'validatedusers'
});

ValidatedUserData.plugin(paginate);
ValidatedUserData.plugin(aggregatePaginate);

module.exports = ValidatedUserData;