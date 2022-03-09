'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lsDataapipayloadModel = new Schema({
  payload: Array,
  lsAccount: Number,
  lsqStats: Boolean,
  formName: String,

}, {timestamps: {createdAt: Date,
  updatedAt: Date,
}});

module.exports = mongoose.model('lsDataapipayload', lsDataapipayloadModel);
