'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const AntheRegistration = new Schema({
  phoneNumber: { type: Number, required: true },
  name: { type: String, required: true },
  careTakerName: { type: String, required: true },
  emailId: { type: String, required: true },
  dob: { type: Date, required: true },
  classStream: { type: String, required: true },
  examModeTime: { type: String, required: true },
  examDate: { type: String, required: true },
  examState: { type: String, required: true },
  url: { type: String, required: true },
  utmCampaign: { type: String, required: true },
  utmSource: { type: String, required: true },
  utmContent: { type: String, required: true },
  active: Boolean,
  dataShared: Boolean,
  dataSharedTime: Number,
}, {
  collection: 'antheregistrations',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

AntheRegistration.plugin(paginate);
AntheRegistration.plugin(aggregatePaginate);

module.exports = AntheRegistration;
