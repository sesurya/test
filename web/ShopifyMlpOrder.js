'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopifyMlpOrder = new Schema({
    orderNumber: Number,
    customerFirstName: String,
    customerLastName: String,
    customerEmail: String,
    customerPhone: Number,
    createdAt: String,
    cart: Object
});

module.exports = mongoose.model('shopifyMlpOrder', shopifyMlpOrder);
