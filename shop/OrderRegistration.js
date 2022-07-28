'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const OrderRegistration = new Schema({
  id: { type: Number, required: true },
  status: { type: String, required: true },
  phoneNumber: { type: Number, required: false },
  paymentReferenceId: { type: String, required: false },
  emailId: { type: String, required: false },
  name: { type: String, required: false },
  parentName: { type: String, required: false },
  city: { type: String, required: false },
  pincode: { type: Number, required: false },
  address: { type: String, required: false },
  grade: { type: String, required: false },
  board: { type: String, required: false },
  state: { type: String, required: false },
  paymentLink: { type: String, required: false },
  price: { type: Number, required: false, default: 0 },
  productName: { type: String, required: false },
  skuId: { type: String, required: true },
  lsRequestId: { type: String, required: false },
  prospectId: { type: String, required: false },
  paidAt: { type: Date, required: false },
  paymentLinkSentAt: { type: Date, required: false },
  registeredAt: { type: Date, required: false },
  detailsSavedAt: { type: Date, required: false },
  orderCreationStatus: { type: String, required: false },
  school: { type: String, required: false },
  premiumId: { type: String, required: false },
  draftOrderId: { type: String, required: false },
  additionalDetails: { type: Object },
  createdBy: String,
  updatedBy: String
}, {
  collection: 'order_registrations',
  timestamps: true,
  minimize: false,
});

OrderRegistration.plugin(paginate);
OrderRegistration.plugin(aggregatePaginate);

module.exports = OrderRegistration;