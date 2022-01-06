'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ServiceCounselor = new Schema({
    age: String,
    email: String,
    experience: String,
    gender: String,
    graduationDegree: String,
    isResumeExist: Boolean,
    isResumeUploaded: Boolean,
    isVideoExist: Boolean,
    isVideoYouTubeLinkExists: Boolean,
    lsRequestID: String,
    lsqStats: Boolean,
    mobile: String,
    mx_Current_Employer: String,
    mx_Grad_College: Number,
    mx_Preferred_Location: Number,
    name: Number,
    postAnswer: Number,
    preferred_Location: Number,
    presentWorkingCity: Number,
    prospectId: Number,
    qualification: Number,
    referrence: Number,
    resume: Number,
    resumeFileNameLength: Number,
    resumeFileSize: Number,
    resumeFilesType: Array,
    salaryInLakhs: String,
    subject: Number,
    teachingExperience: Number,
    totalExperience: Number,
    url: Number,
    youTubeLink: Number,
    createdAt: Date,
    updatedAt: Date
}, {
    timestamps: true,
    collection: 'servicecounseldatas'
});

ServiceCounselor.plugin(paginate);
ServiceCounselor.plugin(aggregatePaginate);

module.exports = ServiceCounselor;