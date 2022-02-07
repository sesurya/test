'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const Schema = mongoose.Schema;

const StateCityPincode = new Schema({
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  pincode_prefix: { type: String, required: true },
}, {
  collection: 'state_district_city_pincodes',
  timestamps: true
});

StateCityPincode.plugin(paginate);
StateCityPincode.plugin(mongooseAggregatePaginate);

module.exports = StateCityPincode;