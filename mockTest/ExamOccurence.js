'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ExamOccurence = new Schema({
    eoId: { type: String, required: true },
    status: { type: String, required: true },
    examType: { type: String, required: true },
    description: { type: String, required: true },
    grade: { type: Array, required: true },
    board: { type: Array, required: true },
    stream: { type: Array, required: true },
    actionDetails: {
        initiatedAt: { type: Date, required: true },
        approvedAt: { type: Date, required: true },
        regOpenAt: { type: Date, required: true },
        regClosedAt: { type: Date, required: true },
        ecPendingAt: { type: Date, required: true },
        ecOpenAt: { type: Date, required: true },
        ecClosedAt: { type: Date, required: true },
        resultPublishedAt: { type: Date, required: true },

        initiatedBy: { type: String, required: true },
        approvedBy: { type: String, required: true },
        regOpenBy: { type: String, required: true },
        regClosedBy: { type: String, required: true },
        ecPendingBy: { type: String, required: true },
        ecOpenBy: { type: String, required: true },
        ecClosedBy: { type: String, required: true },
        resultPublishedBy: { type: String, required: true },
    },
    source: { type: String, required: true }
}, {
    collection: 'examoccurences',
    timestamps: true
});

ExamOccurence.index({ eoId: 1 });
ExamOccurence.index({ status: 1 });

ExamOccurence.plugin(paginate);
ExamOccurence.plugin(aggregatePaginate);

module.exports = ExamOccurence;
