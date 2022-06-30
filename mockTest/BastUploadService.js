'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const BastUploadService = new Schema({
  uploadedBy: String,
  filename: String,
  formattedName: String,
  url: String,
  status: String,
}, {
  collection: 'bastuploadservices',
  timestamps: true,
});

BastUploadService.plugin(paginate);
BastUploadService.plugin(aggregatePaginate);

module.exports = BastUploadService;
