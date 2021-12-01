'use strict';
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Workshop = new Schema({
    name: String,
    formattedName: String,
    header: String,
    content: String,
    teacherName: String,
    teacherImg: String,
    language: String,
    created_by: String,
    updated_by: String,
}, {
    collection: 'workshops',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

Workshop.plugin(paginate);
Workshop.plugin(aggregatePaginate);

module.exports = Workshop;
