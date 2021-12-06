'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const WorkshopMaster = new Schema({
    name: String,
    formattedName: String,
    header: String,
    content: String,
    teacherName: String,
    teacherImg: String,
    language: String,
    createdBy: String,
    updatedBy: String,
}, {
    collection: 'workshopmaster',
    timestamps: true
});

WorkshopMaster.plugin(paginate);
WorkshopMaster.plugin(aggregatePaginate);

module.exports = WorkshopMaster;
