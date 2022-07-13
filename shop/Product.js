'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Product = new Schema({
  id: { type: Number, required: true },
  status: { type: String, required: true },
  productCode: { type: String, required: true },
  productType: { type: String, required: true },
  skuId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: false, default: 0 },
  description: {type: String, required: false},
  additionalDetails:{type: Object},
  createdBy: String,
  updatedBy: String,
}, {
  collection: 'products',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
});

Product.plugin(paginate);
Product.plugin(aggregatePaginate);

module.exports = Product;