'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eligibilityCalculatorModel = new Schema({
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
});

module.exports = mongoose.model('eligibilityCalculators', eligibilityCalculatorModel);
