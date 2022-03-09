'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SecurityKey = new Schema({
    name: String,
    type: String,
    partner_key: String,
    secret_key: String,
    expiry: String,
}, {
    timestamps: true,
    collection: 'securitykeys'
});

SecurityKey.plugin(paginate);
SecurityKey.plugin(aggregatePaginate);

module.exports = SecurityKey;