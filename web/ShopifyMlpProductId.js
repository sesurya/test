'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ShopifyMlpProductId = new Schema({
    mlpProductIds: Array
}, {
    timestamps: true,
    collection: 'shopifyMlpProductId'
});

ShopifyMlpProductId.plugin(paginate);
ShopifyMlpProductId.plugin(aggregatePaginate);

module.exports = ShopifyMlpProductId;
