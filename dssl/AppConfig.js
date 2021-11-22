'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const AppConfig = new Schema({
  season: { type: Number, required: true },
  alreadyRegisteredSchoolMessage: { type: String, required: true },
}, {
  collection: 'app-configs',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

AppConfig.plugin(paginate);
AppConfig.plugin(aggregatePaginate);

module.exports = AppConfig;
