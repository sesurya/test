'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ComplaintsResolution = new Schema({
  complaintName: String,
  customerName: String,
  customerProfile: String,
  complaintDate: Date,
  complaintOrder: Number,
  customerSummary: String,
  supportSummary: String,
  resolvedStatus: Boolean,
  complaintResolutionDate: Date,
  updatedDate: Date,
  isDeleted: Boolean,
}, {
  timestamps: {createdAt: 'created_at'},
  collection: 'complaintsresolution'
});

ComplaintsResolution.plugin(paginate);
ComplaintsResolution.plugin(aggregatePaginate);

module.exports = ComplaintsResolution;
