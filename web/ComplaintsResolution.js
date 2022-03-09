'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintsResolutionModel = new Schema({
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
}, {timestamps: {createdAt: 'created_at'}});

module.exports = mongoose.model('complaintsresolution', complaintsResolutionModel);
