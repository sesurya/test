'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const BnatV3Registration = new Schema({
  name: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  emailId: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  userId: String,
  targetExam: String,
  testVersion: Number,
  active: Boolean,
  grade: Number,
  gradeGroup: String,
  questionPaperId: Number,
  url: String,
  utmCampaign: String,
  utmSource: String,
  utmContent: String,
  password: String,
  hashedPassword: String,
}, {
  collection : "bnatv3registrations",
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

BnatV3Registration.plugin(paginate);
BnatV3Registration.plugin(mongooseAggregatePaginate);

module.exports = BnatV3Registration;
