'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const LoginUrl = new Schema({
    loginUrl: String,
    value: String,
    url: String,
}, {
    timestamps: true,
    collection: 'loginurls'
});

LoginUrl.plugin(paginate);
LoginUrl.plugin(aggregatePaginate);

module.exports = LoginUrl;