'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerComplaintModel = new Schema({
  nameOfTheStudent: String,
  email: String,
  registeredContactNumber: String,
  concern: String,
  mailDeliveryStatus: Boolean,
});

module.exports = mongoose.model('customerComplaint', customerComplaintModel);
