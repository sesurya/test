'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;
const WebsiteLeadTypes = new Schema({
    name:String,
    formattedName: String,
    description:String,
    createdAt:Date,
    updatedAt:Date,
    createdBy:String,
    updatedBy:String
}, {
    timestamps: true,
    collection: 'WebsiteLeadTypes'
});
WebsiteLeadTypes.plugin(paginate);
WebsiteLeadTypes.plugin(aggregatePaginate);
module.exports = WebsiteLeadTypes;