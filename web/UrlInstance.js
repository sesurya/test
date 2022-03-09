'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const UrlInstance = new Schema({
    name: String,
    phoneNumber: Number,
    secondaryMenuInstance: String,
    isEnabled: Number,
    disablePrimaryNav: Array,
    newSecondary: Boolean,
    newPrimary: Boolean,
    newFooter: Boolean
}, {
    timestamps: true,
    collection: 'instance'
});

UrlInstance.plugin(paginate);
UrlInstance.plugin(aggregatePaginate);

module.exports = UrlInstance;