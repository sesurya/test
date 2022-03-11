'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');

const Schema = mongoose.Schema;

const NavigationSecurityStats = new Schema({
    apiType: String,
    isEnabled: Boolean,
    createdAt: Date,
    updatedAt: Date,
}, {
    timestamps: true,
    collection: 'navigationsecuritystats'
});

NavigationSecurityStats.plugin(paginate);
NavigationSecurityStats.plugin(aggregatePaginate);

module.exports = NavigationSecurityStats;