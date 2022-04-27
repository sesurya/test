'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const BournvitaCodeMap = new Schema({
    materialCode: String,
    skuDetails: String,
    batchCode: String,
    secondaryReleasedQuantity: String,
}, {
    collection: 'bournvitacodemaps',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

BournvitaCodeMap.plugin(paginate);
BournvitaCodeMap.plugin(aggregatePaginate);

module.exports = BournvitaCodeMap;