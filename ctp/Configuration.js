'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const Configuration = new Schema({
  key: {type: String, required: true},
  value: {type: Schema.Types.Mixed, required: true},
}, {
  collection : "configurations",
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

Configuration.plugin(paginate);
Configuration.plugin(mongooseAggregatePaginate);

module.exports = Configuration;
