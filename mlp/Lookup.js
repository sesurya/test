'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Lookup = new Schema({
  id: String,
  grades: Array,
  boards: Array
}, {
  collection: 'lookups',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

Lookup.plugin(paginate);
Lookup.plugin(aggregatePaginate);

module.exports = Lookup;