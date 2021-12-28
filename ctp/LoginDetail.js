'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const LoginDetail = new Schema({
  phoneNumber: {type: Number, required: true},
  password: {type: String, required: true},
  prospectID: String,
  testName: String,
  testVersion: Number,
}, {
  collection : "logindetails",
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

LoginDetail.plugin(paginate);
LoginDetail.plugin(mongooseAggregatePaginate);

module.exports = LoginDetail;
