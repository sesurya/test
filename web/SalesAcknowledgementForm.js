'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SalesAcknowledgementForm = new Schema({
    name: String,
    dob: String,
    age: String,
    motherTongue: String,
    email: String,
    city: String,
    interviewEnrolmentNumber: String,
    familyIncome: String,
    registeredEmail: String,
    mobile: String,
    gender: String,
    tenthClassPercentage: String,
    twelethClassPercentage: String,
    highestQualification: String,
    graduationYear: String,
    degreePercentage: String,
    willingToRelocate: String,
    telephonicInterviewDateAndTime: String,

    experience: String,
    totalExperienceInMonths: String,
    totalNoOfCompaniesWorkedTillDate: String,
    sectorOfWorkExForLastJob: String,
    domainOfWorkExForLastJob: String,
    lastCTC: String,

    url: String,
    clientFacingInternship: String,
    resume: String,
    resumeFileNameLength: Number,
    resumeFileSize: Number,
    resumeFileType: String,
    lsRequestID: String,
    lsqStats: Boolean,
    prospectId: String,
    isResumeExist: Boolean,
    isResumeUploaded: Boolean,
    resumeLink: String,    

    createdAt: Date,
    updatedAt: Date,

    
}, {
    timestamps: true,
    collection: 'salesacknowledgementforms'
});

SalesAcknowledgementForm.plugin(paginate);
SalesAcknowledgementForm.plugin(aggregatePaginate);

module.exports = SalesAcknowledgementForm;