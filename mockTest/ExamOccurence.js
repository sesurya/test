'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ExamOccurence = new Schema({
    eoId: { type: String, required: true },
    status: {
        type: String,
        enum: ["initiated", "approved",
            'registration_open', "registration_closed",
            "exam_conduction_pending", "exam_conduction_ongoing",
            "exam_conduction_closed", "result_published"],
        required: true,
        default: "initiated"
    },
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

        initiatedBy: { type: String, required: false },
        approvedBy: { type: String, required: false },
        regOpenBy: { type: String, required: false },
        regClosedBy: { type: String, required: false },
        ecPendingBy: { type: String, required: false },
        ecOpenBy: { type: String, required: false },
        ecClosedBy: { type: String, required: false },
        resultPublishedBy: { type: String, required: false },
    },
    timetables: { type: Array, required: false, default: [] },
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
