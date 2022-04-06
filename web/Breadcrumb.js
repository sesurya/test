'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Breadcrumb = new Schema({
    name: String,
    url: String,
    position: Number,
    isParent: Boolean,
    parent: Schema.Types.ObjectId,
    instance: String,
    parentName: String,
    isActive: Boolean,
    user: String,
}, {
    timestamps: true,
    collection: 'breadcrumbs'
});

Breadcrumb.plugin(paginate);
Breadcrumb.plugin(aggregatePaginate);

module.exports = Breadcrumb;