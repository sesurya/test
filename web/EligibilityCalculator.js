'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EligibilityCalculator = new Schema({
  examId: Object,
  category: String,
  minAge: Number,
  maxAge: Number,
  numberOfAttempts: Number,
  benchmarkDisability: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'eligibilitycalculators'
});

EligibilityCalculator.plugin(paginate);
EligibilityCalculator.plugin(aggregatePaginate);

module.exports = EligibilityCalculator;
