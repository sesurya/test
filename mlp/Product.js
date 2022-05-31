'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String, required: true },
  formattedName: { type: String, required: true, unique: true },
  productCode: {type: String, required: true, unique: true },
  noOfSessions: { type: String, required: true },
  hasElective: { type: Boolean, required: true },
  createdBy: String,
  updatedBy: String
}, {
  collection: 'products',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
});

Product.plugin(paginate);
Product.plugin(aggregatePaginate);

module.exports = Product;