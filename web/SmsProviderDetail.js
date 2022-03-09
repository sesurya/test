'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SmsProviderDetail = new Schema({
    providerName: String,
    sourceNumber : String,
    apiKey:  String,
    secretKey: String,
    api: String,
    kaleraSender: String,
    Value_first_api: String,
    Value_first_api_version: String,
    Value_first_sender_id: String,
    Value_first_token_generation_host: String,
    Value_first_pass: String,
    Value_first_user: String,
}, {
    timestamps: true,
    collection: 'smsproviderdetail'
});

SmsProviderDetail.plugin(paginate);
SmsProviderDetail.plugin(aggregatePaginate);

module.exports = SmsProviderDetail;