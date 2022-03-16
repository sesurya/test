'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;
const website_lead_types = new Schema({
    name:String,
    formattedName: String,
    description:String,
    createdAt:Date,
    updatedAt:Date,
    createdBy:String,
    updatedBy:String
}, {
    timestamps: true,
    collection: 'website_lead_types'
});
website_lead_types.plugin(paginate);
website_lead_types.plugin(aggregatePaginate);
module.exports = website_lead_types;