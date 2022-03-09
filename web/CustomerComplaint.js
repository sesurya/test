'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const CustomerComplaint = new Schema({
  nameOfTheStudent: String,
  email: String,
  registeredContactNumber: String,
  concern: String,
  mailDeliveryStatus: Boolean,
}, {
  timestamps: true,
  collection: 'customerComplaint'
});

CustomerComplaint.plugin(paginate);
CustomerComplaint.plugin(aggregatePaginate);

module.exports = CustomerComplaint;
