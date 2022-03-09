'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintsResolutionMailModel = new Schema({
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
});

module.exports = mongoose.model('complaintsresolutionmail', complaintsResolutionMailModel);
