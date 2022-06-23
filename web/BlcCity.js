'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const BlcCity = new Schema({
    cityId: { type: Number, required: true },
    cityName: { type: String, required: true },
    stateName: { type: String, required: true },
    cityIframe: { type: String, required: true },
}, {
  collection: 'blc_cities',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
});

BlcCity.plugin(paginate);
BlcCity.plugin(aggregatePaginate);

module.exports = BlcCity;