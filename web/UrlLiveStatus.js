'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const UrlLiveStatus = new Schema({
  url: String,
  status: Number,
  statusText: String,
  notificationStatus: String,
}, {
    timestamps: true,
    collection: 'urlLiveStat'
});

UrlLiveStatus.plugin(paginate);
UrlLiveStatus.plugin(aggregatePaginate);

module.exports = UrlLiveStatus;