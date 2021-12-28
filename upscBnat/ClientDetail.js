'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ClientDetail = new Schema({
  uuid: String,
  name: String,
  active: Boolean,
  case: String,
  key: String,
  iv: String,
}, {
  collection: 'clientdetails',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

ClientDetail.plugin(paginate);
ClientDetail.plugin(aggregatePaginate);

module.exports = ClientDetail;
