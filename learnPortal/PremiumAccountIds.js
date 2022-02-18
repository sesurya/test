'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const PremiumAccountIds = new Schema({
  ids: Array,
}, {
  collection: 'premiumAccountIds',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

PremiumAccountIds.plugin(paginate);
PremiumAccountIds.plugin(mongooseAggregatePaginate);

module.exports = PremiumAccountIds;