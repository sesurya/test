'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpTypes = new Schema({
  otpType: String,
});

module.exports = mongoose.model('otptypes', otpTypes);
