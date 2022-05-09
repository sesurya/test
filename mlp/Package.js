'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Package = new Schema({
  id: { type: Number, required: true },
  status: { type: String, required: true },
  phoneNumber: { type: Number, required: false },
  paymentReferenceId: { type: String, required: false },
  email_Id: { type: String, required: false },
  name: { type: String, required: false },
  parentName: { type: String, required: false },
  city: { type: String, required: false },
  pincode: { type: Number, required: false },
  address: { type: String, required: false },
  grade: { type: String, required: false },
  board: { type: String, required: false },
  state: { type: String, required: false },
  communicationLanguage:{type: String, required: false},
  paymentLink: { type: String, required: false },
  price: { type: Number, required: false, default: 0 },
  product: {type: String,  required: false},
  activationCode: { type: String, required: true, unique: true },
  cron_flag: { type: Boolean, required: false },
  ls_request_id: { type: String, required: false },
  prospect_id: { type: String, required: false },
  campaign: { type: String, required: false },
  channel: String,
  batchId: { type: String, required: false },
  salesEmail: { type: String, required: false },
  autoRegistrationStatus: { type: String, required: false },
  serialNo: { type: Number, required: false},
  mathPercentage: { type: String, required: false },
  sciencePercentage: { type: String, required: false },
  languageOfInstruction: { type: String, required: false },
  paidAt: {type: Date, required: false},
  paymentLinkSentAt: {type: Date, required: false},
  registeredAt: {type: Date, required: false},
  detailsSavedAt: {type: Date, required: false},
  orderCreationStatus: { type: String, required: false },
  school: { type: String, required: false },
  programWeek: { type: String, required: false },
  preferredCenter: { type: String, required: false },
  createdBy: String,
  updatedBy: String
}, {
  collection: 'packages',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
});

Package.plugin(paginate);
Package.plugin(aggregatePaginate);

module.exports = Package;