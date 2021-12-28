'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const ClientDetail = new Schema({
  uuid: String,
  name: String,
  active: Boolean,
  case: String,
  key: String,
  iv: String,
}, {
  colletion: "clientdetails",
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

ClientDetail.plugin(paginate);
ClientDetail.plugin(mongooseAggregatePaginate);

module.exports = ClientDetail;
