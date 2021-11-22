'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const AgencyPartner = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
}, {
  collection: 'agency-partners',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

AgencyPartner.plugin(paginate);
AgencyPartner.plugin(aggregatePaginate);

module.exports = AgencyPartner;

