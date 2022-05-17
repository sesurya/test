'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const IasMockInterview = new Schema({
    name: String,
    email: String,
    rollno: String,    
    attachedFilesType: Array,    
    mobile: String,
    totalFileSize: Number,
    url: String,
    page: String,
    utmCampaign: String,
    utmSource: String,
    utmContent: String,
    utmTerm: String,
    utmMedium: String,
    utmCampaignId: String,
    gclid: String,
    attachedFiles:Array,
    registrationflag: Boolean,
    createdAt: Date    
},{
    timestamps: true,
    collection: 'iasmockinterviews'
});

IasMockInterview.plugin(paginate);
IasMockInterview.plugin(aggregatePaginate);

module.exports = IasMockInterview;