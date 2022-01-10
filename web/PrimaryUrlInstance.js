'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PrimaryUrlInstance = new Schema({
    name: String,
    url: String,
    level: Number,
    order: Number,
    submenu: Boolean,
    parent: Schema.Types.ObjectId,
    menuExpFlag: Number,
    submenuArr: Array,
    isActive: Boolean,
    onclick: String,
    relFollow: String,
    enabledInstances: Array,
    enabledDirectUrl: Array,
}, {
    timestamps: true,
    collection: 'primaryurlinstances'
});

PrimaryUrlInstance.plugin(paginate);
PrimaryUrlInstance.plugin(aggregatePaginate);

module.exports = PrimaryUrlInstance;