'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortMapping = new Schema({
  batchType: { type: String, required: true },
  cohortList: { type: Array, required: true },
  page: { type: String, required: true },
}, {
  collection: 'cohortmappings',
  timestamps: true
});

module.exports = cohortMapping;