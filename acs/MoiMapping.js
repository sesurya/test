'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MoiMapping = new Schema({
  mediumOfInstruction: { type: String, required: true },
  displayName: { type: String, required: true },
  page: { type: String, required: true },
}, {
  collection: 'mediumofinstructionmappings',
  timestamps: true
});

MoiMapping.plugin(paginate);
MoiMapping.plugin(aggregatePaginate);

module.exports = MoiMapping;