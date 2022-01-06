'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Configuration = new Schema({
  key: { type: String, required: true },
  value: { type: Schema.Types.Mixed, required: true },
}, {
  collection: 'configurations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

Configuration.plugin(paginate);
Configuration.plugin(aggregatePaginate);

module.exports = Configuration;
