'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PrimaryMenu = new Schema({
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
    additionalClass: String
}, {
    timestamps: true,
    collection: 'primarymenus'
});

PrimaryMenu.plugin(paginate);
PrimaryMenu.plugin(aggregatePaginate);

module.exports = PrimaryMenu;