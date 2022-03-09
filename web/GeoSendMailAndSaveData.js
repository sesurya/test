'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSendMailAndSaveDataModel = new Schema({
  nameOfTheStudent: String,
  email: String,
  operatingSystem: String,
  concernInOneLine: String,
  concern: String,
  totalFileSize: Number,
  attachedFilesType: Array,
  attachedFileNames: Array,
  attachedFiles: Array,
  mailDeliveryStatus: Boolean,
  createdAt: Date,
});

module.exports = mongoose.model('geoSendMailAndSaveData', geoSendMailAndSaveDataModel);
