'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;


const WorkshopMaster = new Schema({
    name: String,
    formattedName: String,
    pageConfig: {
        language: String,
        seminarHighlights: {
            leftcard: [{ type: Array, "default": [] }],
            rightcard: [{ type: Array, "default": [] }]
        },
        seminarTitle: String,
        seminarDescription: String,
        faqSection: { type: Array, "default": [] },
        teacher: String,
        teacherdescription: String,
        teacherimage: String
    }


}, {
    collection: 'workshop_master',
    timestamps: true
});

WorkshopMaster.plugin(paginate);
WorkshopMaster.plugin(aggregatePaginate);

module.exports = WorkshopMaster;


