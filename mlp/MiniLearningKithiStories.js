'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MiniLearningKithiStories = new Schema({
  id: { type: Number, required: true },
  status: { type: String, required: true },
  phoneNumber: { type: Number, required: false },
  grade: { type: String, required: false },
  board: { type: String, required: false },
  state: { type: String, required: false },
  parentName: { type: String, required: false },
  city: { type: String, required: false },
  pincode: { type: Number, required: false },
  price: { type: Number, required: false, default: 0 },
  product: {type: String,  required: false},
  activationCode: { type: String, required: true, unique: true },
  paymentReferenceId: { type: String, required: false },
  email_Id: { type: String, required: false },
  name: { type: String, required: false },
  cron_flag: { type: Boolean, required: false },
  ls_request_id: { type: String, required: false },
  prospect_id: { type: String, required: false },
  campaign: { type: String, required: false },
}, {
  collection: 'minilearningkithistories',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
});

MiniLearningKithiStories.plugin(paginate);
MiniLearningKithiStories.plugin(aggregatePaginate);

module.exports = MiniLearningKithiStories;