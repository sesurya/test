'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const IpCollection = new Schema({
  hitCount: Number,
  isBlocked: Boolean,
  createdTime: Date,
  type: String,
  ipAddress: String,
  phoneNumber: Number,
},{
    collection : "ipcollections",
    timestamps : true
});

IpCollection.plugin(paginate);
IpCollection.plugin(mongooseAggregatePaginate);

module.exports = IpCollection;
