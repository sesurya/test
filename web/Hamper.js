'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Hamper = new Schema({
  name: String,
  mobile: String,
  alternateMobile: String,
  email: String,
  address: String,
  state: String,
  city: String,
  tShirtSize: String,
  landMark: String,
  pinCode: Number,
  url: String,
  referrerUrl: String,
  emailDomain: String,
  addressType: String,
  userType: String,
  isMailDelivered: Boolean,
  isOrderPunchApiEnabled: Boolean,
  isorderPunched: Boolean,
  draftOrderId: String,
  createdAt: Date
}, {
  timestamps: true,
  collection: 'hampers'
});

Hamper.plugin(paginate);
Hamper.plugin(aggregatePaginate);

module.exports = Hamper;