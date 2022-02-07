'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const BlcRecruitmentForm = new Schema({
    name: String,
    gender: String,
    age: String,

    email: String,
    graduationDegree: String,
    mx_Grad_College: String,
    interestedForSubject: String,
    teachingExperience: String,

    presentWorkingState: String,
    presentWorkingCity: String,
    mx_Preferred_Location: String,
    salaryInLakhs: String,
    mx_Current_Employer: String,
    postAnswer: String,
    url: String,
    mobile: String,
    videoFileNameLength: Number,
    video: String,
    videoFileSize: Number,
    videoFilesType: Array,
    videoFilesType: {0: String},

    source: String,
    sourceCampaign: String,
    sourceMedium: String,
    sourceContent: String,
    isVideoExist: Boolean,
    isVideoUploaded: Boolean,
    videoLink: String,
    mailDeliveryStatus: String,

    createdAt: Date,
    updatedAt: Date,

    lsRequestID: String,
    lsqStats: Boolean,
    prospectId: String,
}, {
    timestamps: true,
    collection: 'blcrecruitmentforms'
});

BlcRecruitmentForm.plugin(paginate);
BlcRecruitmentForm.plugin(aggregatePaginate);

module.exports = BlcRecruitmentForm;