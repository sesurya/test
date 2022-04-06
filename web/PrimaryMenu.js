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
    parentName: String,
    isActive: Boolean,
    user: String,
    relFollow: String,
    onClick: String,
    additionalClass: String
}, {
    timestamps: true,
    collection: 'primarymenus'
});

PrimaryMenu.plugin(paginate);
PrimaryMenu.plugin(aggregatePaginate);

module.exports = PrimaryMenu;