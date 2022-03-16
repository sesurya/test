'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const RegSubjectMapping = new Schema({
    userId: { type: String, required: true },
    eoId: { type: String, required: true },
    examType: { type: String, required: true },
    subject: { type: String, required: true },
    scheduledAt: { type: String, required: true },
    alertStatus: {
        type: String,
        required: true,
        enum: ["pending", "completed"],
        default: "pending"
    },
    status: {
        type: String,
        enum: ["exam_registered", "redirected", 'attempted', "not_attempted"],
        required: true
    },
    notificationDetails: {
        type: Array,
        required: true,
        default: []
    }
}, {
    collection: 'regsubjectmappings',
    timestamps: true
});

RegSubjectMapping.index({ userId: 1, subject: 1 }, { unique: true });
RegSubjectMapping.plugin(paginate);
RegSubjectMapping.plugin(aggregatePaginate);

module.exports = RegSubjectMapping;
