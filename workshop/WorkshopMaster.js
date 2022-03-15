'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;


const WorkshopMaster = new Schema({
    language: String,
    seminarHighlights: {
        leftcard: {
            leftone: { icon: String, content: String },
            lefttwo: { icon: String, content: String },
            leftthree: { icon: String, content: String }
        },
        rightcard: {
            rightone: { icon: String, content: String },
            righttwo: { icon: String, content: String },
            rightthree: { icon: String, content: String }
        },
    },
    seminarTitle: String,
    seminarType: String,
    faqSection: { faq1: { faq: String, solution: String }, faq2: { faq: String, solution: String }, faq3: { faq: String, solution: String } },
    teacher: String,
    teacherdescription: String,
    teacherimage: String
}, {
    collection: 'workshop_master',
    timestamps: true
});

WorkshopMaster.plugin(paginate);
WorkshopMaster.plugin(aggregatePaginate);

module.exports = WorkshopMaster;
