'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FileUpload = new Schema({
  name: String,
  type: String,
  url: String,
  lastModified: String,
  sizeInBytes: Number,
  bucket: String,
  purpose: String,
  keyName: String,
  user: String,
  status: String,
  recordCount: Number,
  action: String,
  recordsDeleted: Number,
  recordsUndeleted: Number,
}, {
  timestamps: true,
  collection: 'fileUpload'
});

FileUpload.plugin(paginate);
FileUpload.plugin(aggregatePaginate);

module.exports = FileUpload;
