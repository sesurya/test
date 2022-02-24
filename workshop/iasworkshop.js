'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const faqSecValue = new Schema({
    title: String,
    forqueries: String,
    tollfree: Number,
});

const headerValue = new Schema({
    headerImg: String,
    seminarTitle: String,
    seminarType: String,
});

const firstMidSecValue = new Schema({
    titleTop: String,
    titlebottom: String,
    highlight: Array,
});

const secondMidSecValue = new Schema({
    titleTop: String,
    titlebottom: String,
    highlight: Array,
});

const urlPathValue = new Schema({
    imgUrl: String,
});
const iasworkshop = new Schema({
    firstmidsectionAttributes: firstMidSecValue,
    second: String,
    highlight: Array,
    secondMidSecAttributes: secondMidSecValue,
    faqSecAttributes: faqSecValue,
    headerAttributes: headerValue,
    urlPathAttributes: urlPathValue,
    button: Object,
},{
    collection: 'iasworkshop',
    timestamps: {
    timestamps: true
    }
});

iasworkshop.plugin(paginate);
iasworkshop.plugin(aggregatePaginate);

module.exports = iasworkshop;