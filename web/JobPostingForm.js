'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const JobPostingForm = new Schema({
    name: String,
    mobile: String,
    email: String,

    qualification: String,
    teachingExperience: String,
    referrence: String,
    subject: String,

    source: String,
    sourceCampaign: String,
    sourceMedium: String,
    sourceContent: String,
    url: String,

    isResumeExist: Boolean,
    isResumeUploaded: Boolean,
    resumeLink: String,

    isVideoYouTubeLinkExists: Boolean,
    youTubeLink: String,

    isVideoExist: Boolean,
    isVideoUploaded: Boolean,
    videoLink: String,

    createdAt: Date,
    updatedAt: Date,

    lsRequestID: String,
    lsqStats: Boolean,
    prospectId: String,
}, {
    timestamps: true,
    collection: 'jobpostingforms'
});

JobPostingForm.plugin(paginate);
JobPostingForm.plugin(aggregatePaginate);

module.exports = JobPostingForm;