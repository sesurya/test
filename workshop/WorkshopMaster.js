'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

// const faqSecValue = new Schema({
//     title: String,
//     forqueries: String,
//     tollfree: Number,
// });

// const headerValue = new Schema({
//     headerImg: String,
//     seminarTitle: String,
//     seminarType: String,
// });

// const firstMidSecValue = new Schema({
//     titleTop: String,
//     titlebottom: String,
//     highlight: Array,
// });

// const secondMidSecValue = new Schema({
//     titleTop: String,
//     titlebottom: String,
//     highlight: Array,
// });

// const urlPathValue = new Schema({
//     imgUrl: String,
// });

const WorkshopMaster = new Schema({
    language : String,
    seminarTitle : String,
    seminarType : String,
    shcardleftdown : String,
    shcardleftup : String,
    shcardrightdown : String,
    shcardrightup : String,
    teacher : String,
    teacherdescription : String,
}, {
    collection: 'workshop_master',
    timestamps: true
});

WorkshopMaster.plugin(paginate);
WorkshopMaster.plugin(aggregatePaginate);

module.exports = WorkshopMaster;
