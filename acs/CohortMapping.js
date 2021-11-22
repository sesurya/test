'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');

const Schema = mongoose.Schema;

const CohortMapping = new Schema({
  batchType: { type: String, required: true },
  cohortList: { type: Array, required: true },
  page: { type: String, required: true },
}, {
  collection: 'cohortmappings',
  timestamps: true
});

CohortMapping.plugin(paginate);
CohortMapping.plugin(aggregatePaginate);

module.exports = CohortMapping;