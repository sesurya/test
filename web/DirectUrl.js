'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const DirectUrl = new Schema({
    url: String,
    instance: Schema.Types.ObjectId,
    urlExpFlag: Number,
    isEnabled: Number,
    disablePrimaryNav: Array
}, {
    timestamps: true,
    collection: 'directurls'
});

DirectUrl.plugin(paginate);
DirectUrl.plugin(aggregatePaginate);

module.exports = DirectUrl;