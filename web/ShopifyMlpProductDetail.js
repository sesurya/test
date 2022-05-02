'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ShopifyMlpProductDetail = new Schema({
    productId: String,
    productOptions: Array,
}, {
    timestamps: true,
    collection: 'shopifymlpproductdetails'
});

ShopifyMlpProductDetail.plugin(paginate);
ShopifyMlpProductDetail.plugin(aggregatePaginate);

module.exports = ShopifyMlpProductDetail;
