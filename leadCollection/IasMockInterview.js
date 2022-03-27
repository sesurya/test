'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;




const IasMockInterview = new Schema({
    name: String,
    email: String,
    rollno: Boolean,    
    attachedFilesType:[{
        0: String   
    }],    
    mobile: String,
    totalFileSize: String,
    url: String,
    page: Boolean,
    utmCampaign: String,
    utmSource: String,
    utmContent: String,
    utmTerm: String,
    utmMedium: String,
    utmCampaignId: String,
    gclid: String,
    attachedFiles:[{
        0: String
    }],
    registrationflag: Boolean,
    
},{
    timestamps: true,
    collection: 'iasmockinterviews'
});

IasMockInterview.plugin(paginate);
IasMockInterview.plugin(aggregatePaginate);

module.exports = IasMockInterview;