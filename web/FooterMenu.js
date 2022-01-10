'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FooterMenu = new Schema({
    name: String,
    url: String,
    level: Number,
    order: Number,
    parent: Schema.Types.ObjectId,
    submenu: Boolean,
    submenuArr: Array,
    hrefAttribute: String,
    additionalClass: String,
}, {
    timestamps: true,
    collection: 'footermenus'
});

FooterMenu.plugin(paginate);
FooterMenu.plugin(aggregatePaginate);

module.exports = FooterMenu;