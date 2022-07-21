'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ShopifyMlpOrder = new Schema({
    orderNumber: Number,
    customerFirstName: String,
    customerLastName: String,
    customerEmail: String,
    customerPhone: Number,
    totalPrice: String,
    checkoutId: Number,
    createdAt: String,
    cart: Object
}, {
    timestamps: true,
    collection: 'shopifymlporders'
});

ShopifyMlpOrder.plugin(paginate);
ShopifyMlpOrder.plugin(aggregatePaginate);

module.exports = ShopifyMlpOrder;
