'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopifyMlpProductId = new Schema({
    mlpProductIds: Array
});

module.exports = mongoose.model('shopifyMlpProductId', shopifyMlpProductId);
