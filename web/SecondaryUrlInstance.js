'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SecondaryUrlInstance = new Schema({
    name: String,
    url: String,
    level: Number,
    order: Number,
    submenu: Boolean,
    instance: String,
    parent: Schema.Types.ObjectId,
    submenuArr: Array,
    isActive: Boolean,
    relFollow: String,
    enabledInstances: Array,
    enabledDirectUrl: Array,
}, {
    timestamps: true,
    collection: 'secondaryurlinstances'
});

SecondaryUrlInstance.plugin(paginate);
SecondaryUrlInstance.plugin(aggregatePaginate);

module.exports = SecondaryUrlInstance;