'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;
const WebsiteLeadType = new Schema({
    name:String,
    formattedName: String,
    description:String,
    createdAt:Date,
    updatedAt:Date,
    createdBy:String,
    updatedBy:String,
    propectId:String
}, {
    timestamps: true,
    collection: 'website_lead_types'
});
WebsiteLeadType.plugin(paginate);
WebsiteLeadType.plugin(aggregatePaginate);

module.exports = WebsiteLeadType;