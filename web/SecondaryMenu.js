'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SecondaryMenu = new Schema({
    name: String,
    url: String,
    level: Number,
    order: Number,
    submenu: Boolean,
    instance: String,
    parent: Schema.Types.ObjectId,
    submenuArr: Array,
    isActive: Boolean,
    relFollow: String
}, {
    timestamps: true,
    collection: 'secondarymenus'
});

SecondaryMenu.plugin(paginate);
SecondaryMenu.plugin(aggregatePaginate);

module.exports = SecondaryMenu;