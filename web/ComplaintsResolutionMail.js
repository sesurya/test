'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ComplaintsResolutionMail = new Schema({
  nameOfTheStudent: String,
  email: String,
  toMailId: String,
  registeredContactNumber: String,
  alternateContactNumber: String,
  concernInOneLine: String,
  concern: String,
  totalFileSize: Number,
  attachedFilesType: Array,
  attachedFiles: Array,
  mailDeliveryStatus: Boolean,
  
  created_at: String,

}, {
  timestamps: true,
  collection: 'complaintsresolutionmail'
});

ComplaintsResolutionMail.plugin(paginate);
ComplaintsResolutionMail.plugin(aggregatePaginate);

module.exports = ComplaintsResolutionMail;
