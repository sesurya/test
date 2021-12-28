'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const Lookup = new Schema({
  type: String,
  key: String,
  page: String,
  data: Array
}, {
  collection : "lookups",
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

Lookup.plugin(paginate);
Lookup.plugin(mongooseAggregatePaginate);

module.exports = Lookup;