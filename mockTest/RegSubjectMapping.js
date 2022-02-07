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
    status: {
        type: String,
        enum: ["pending", "redirected", 'attempted', "not_attempted"],
        required: true
    },
    notificationDetails: {
        smsCounter: { type: Number, required: true, default: 0 },
        emailCounter: { type: Number, required: true, default: 0 },
        smsStatus: {
            type: String,
            enum: ['pending', "success", "failed"],
            required: true,
            default: 'pending'
        },
        emailStatus: {
            type: String,
            enum: ['pending', "success", "failed"],
            required: true,
            default: 'pending'
        }
    }
}, {
    collection: 'reg_subject_mapping',
    timestamps: true
});

RegSubjectMapping.index({ regId: 1, subject: 1 }, { unique: true });
RegSubjectMapping.plugin(paginate);
RegSubjectMapping.plugin(aggregatePaginate);

module.exports = RegSubjectMapping;
