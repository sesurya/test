'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Give = new Schema({
    full_name: String,
    address: String,
    city: String,
    state: String,
    pincode: Number,
    mob_number: String,
    email: String,
    brand: String,
    model: String,
    varient: String,
    picture_front: String,
    picture_back: String,
    pickup_time: String,
    pickup_day: String,
    url: String,
    pan_card: String,
    organization_name: String,
    donate_ngo: String,

    created_at: String,
}, {
    timestamps: true,
    collection: 'give'
});

Give.plugin(paginate);
Give.plugin(aggregatePaginate);

module.exports = Give;