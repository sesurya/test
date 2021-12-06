'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PackageBatch = new Schema({
    batchId: { type: String, required: true, unique: true },
    campaign: String,
    status: { type: String, required: true },
    noOfPackages: { type: Number, required: false },
    isPrepaid: { type: Boolean, required: false },
    packagePrice: { type: Number, required: false },
    createdBy: String,
    updatedBy: String,
    notifyEmails: [String]
}, {
    collection: 'packagebatchs',
    timestamps: true
});

PackageBatch.plugin(paginate);
PackageBatch.plugin(aggregatePaginate);

module.exports = PackageBatch;
