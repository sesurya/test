'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiMessagesModel = new Schema({
  name: String,
  api: Object,
  message: String,
  messages: Object,
});

module.exports = mongoose.model('apiMessages', apiMessagesModel);
