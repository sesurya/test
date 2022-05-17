'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const FacultyHiringApplicationForm = new Schema({
  name: String,
  mobile: String,
  email: String,

  gender: String,
  dob: Date,
  graduationCollege: String,
  QualificationHighest: String,

  postGraduationCollegeBoardUniversity: String,
  postGraduationSubject: String,
  postGraduationPercentage: Number,
  postGraduationDateFrom: Date,
  postGraduationDateTo: Date,

  graduationCollegeBoardUniversity: String,
  graduationSubject: String,
  graduationPercentage: Number,
  graduationDateFrom: Date,
  graduationDateTo: Date,

  teachingSubjects: Array,
  teachingExpertise: Array,

  ExperienceCurrentInstituteName: String,
  ExperienceCurrentInstituteFrom: Date,
  ExperienceCurrentInstituteTo: Date,

  Experience: Number,

  address: String,
  city: String,
  state: String,
  pincode: Number,

  testLocation: String,
  ctcInLakhs: Number,

  referenceByjusName: String,
  referenceByjusPhoneNumber: Number,

  referenceOthersName: String,
  referenceOthersPhoneNumber: Number,

  readyToMove: String,
  mailDeliveryStatus: Boolean,

  isVideoResumeExist: Boolean,
  isVideoResumeUploaded: Boolean,
  videoResumeLink: String,

  sourceCampaign: String, // get utm_campaign from url
  sourceMedium: String, // get utm_source from url
  sourceContent: String, // get utm-content from url
  url: String, // actual url
  urlReferrer: String, // referrer url
  createdAt: Date,
  updatedAt: Date,
}, {
  timestamps: true,
  collection: 'facultyhiringapplicationforms'
});

FacultyHiringApplicationForm.plugin(paginate);
FacultyHiringApplicationForm.plugin(aggregatePaginate);

module.exports = FacultyHiringApplicationForm;
