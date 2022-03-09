'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hamperModel = new Schema({
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
});

module.exports = mongoose.model('hamper', hamperModel);