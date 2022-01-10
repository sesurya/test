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
    mx_Grad_College: String,
    mx_Preferred_Location: String,
    name: String,
    postAnswer: String,
    preferred_Location: String,
    presentWorkingCity: String,
    prospectId: String,
    qualification: String,
    referrence: String,
    resume: String,
    resumeFileNameLength: String,
    resumeFileSize: Number,
    resumeFilesType: String,
    salaryInLakhs: String,
    subject: String,
    teachingExperience: String,
    totalExperience: String,
    url: String,
    youTubeLink: String,
    createdAt: Date,
    updatedAt: Date
}, {
    timestamps: true,
    collection: 'servicecounseldatas'
});

ServiceCounselor.plugin(paginate);
ServiceCounselor.plugin(aggregatePaginate);

module.exports = ServiceCounselor;