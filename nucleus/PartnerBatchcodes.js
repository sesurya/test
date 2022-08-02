//public imports
'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const PartnerBatch = new Schema({
    campaignName: { type:String, required:true},
    uniqueValidator: { type: String, required: true}
},{
    collection: 'partner_batchcodes',
    timestamps:{
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    } 
});

PartnerBatch.plugin(paginate);

module.exports = PartnerBatch;