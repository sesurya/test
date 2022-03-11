'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ApiMessage = new Schema({
  name: String,
  api: Object,
  message: String,
  messages: Object,
}, {
  timestamps: true,
  collection: 'apimessages'
});

ApiMessage.plugin(paginate);
ApiMessage.plugin(aggregatePaginate);

module.exports = ApiMessage;
