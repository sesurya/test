'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Config = new Schema({
  pkey: String,
  redirectUrl: String,
}, {
  collection: 'configs',
  timestamps: true
});

Config.plugin(paginate);
Config.plugin(aggregatePaginate);

module.exports = Config;