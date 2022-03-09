'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const GeoSendMailAndSaveData = new Schema({
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
}, {
  timestamps: true,
  collection: 'geoSendMailAndSaveData'
});

GeoSendMailAndSaveData.plugin(paginate);
GeoSendMailAndSaveData.plugin(aggregatePaginate);

module.exports = GeoSendMailAndSaveData;
