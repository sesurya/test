'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ActivationCode = new Schema({
  status: { type: String, required: true },
  activationCode: { type: String, required: true, unique: true },
  campaign: { type: String, required: false },
  channel:String,
  product: {type: String,  required: false},
  price: { type: Number, required: false, default: 0 },
  batchId: { type: String, required: false },
}, {
  timestamps: true,
  collection: "activation_code"
});

ActivationCode.plugin(paginate);
ActivationCode.plugin(aggregatePaginate);

module.exports = ActivationCode;
