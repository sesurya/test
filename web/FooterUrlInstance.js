'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FooterUrlInstance = new Schema({
    name: String,
    url: String,
    level: Number,
    order: Number,
    parent: Schema.Types.ObjectId,
    submenu: Boolean,
    submenuArr: Array,
    hrefAttribute: String,
    additionalClass: String,
    enabledInstances: Array,
    enabledDirectUrl: Array,
}, {
    timestamps: true,
    collection: 'footerurlinstances'
});

FooterUrlInstance.plugin(paginate);
FooterUrlInstance.plugin(aggregatePaginate);

module.exports = FooterUrlInstance;