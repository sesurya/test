'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediumOfInstructionMapping = new Schema({
  mediumOfInstruction: { type: String, required: true },
  displayName: { type: String, required: true },
  page: { type: String, required: true },
}, {
  collection: 'mediumofinstructionmappings',
  timestamps: true
});

module.exports = mediumOfInstructionMapping;