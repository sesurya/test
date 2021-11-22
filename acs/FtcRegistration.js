'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FtcRegistration = new Schema({
  fullName: { type: String, required: true },
  grade: { type: Number, required: true },
  board: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  emailId: { type: String, required: true },
  pincode: { type: Number, required: true },
  city: String,
  state: String,
  country: String,
  paymentStatus: String,
  orderReferenceId: String,
  paymentReferenceId: String,
  paymentLink: String,
  gradeGroup: String,
  subjects: String,
  url: String,
  utmCampaign: String,
  utmSource: String,
  utmContent: String,
  whatsapp: Boolean
}, {
  collection: 'bcasregistrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

FtcRegistration.plugin(paginate);
FtcRegistration.plugin(aggregatePaginate);

module.exports = FtcRegistration;