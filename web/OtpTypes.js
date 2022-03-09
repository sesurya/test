'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const OtpTypes = new Schema({
  otpType: String,
}, {
  timestamps: true,
  collection: 'otptypes'
});

OtpTypes.plugin(paginate);
OtpTypes.plugin(aggregatePaginate);

module.exports = OtpTypes;
