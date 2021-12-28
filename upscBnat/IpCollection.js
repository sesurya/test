'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const IpCollection = new Schema({
  hitCount: Number,
  isBlocked: Boolean,
  createdTime: Date,
  type: String,
  ipAddress: String,
}, {
  collection: 'ipcollections'
});

IpCollection.plugin(paginate);
IpCollection.plugin(aggregatePaginate);

module.exports = IpCollection;
