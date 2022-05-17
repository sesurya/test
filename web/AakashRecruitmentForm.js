'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const AakashRecruitmentForm = new Schema({
  firstName: String,
  lastName: String,
  gender: String,

  age: Number,
  email: String,
  mobile: String,

  graduationDegree: String,
  interestedSubject: String,
  teachingExperience: String,

  currentState: String,
  currentCity: String,
  currentSalary: String,

  currentCompany: String,
  expectedSalary: String,
  noticePeroid: String,

  workedWithByjus: String,
  workedWithAakash: String,
  stream: String,

  relocate: String,
  isResumeExist: Boolean,
  isResumeUploaded: Boolean,

  resume: String,
  isVideoExist: Boolean,
  isVideoUploaded: Boolean,

  video: String,
  createdAt: Date,
  updatedAt: Date,
  
  lsRequestID: String,
  lsqStats: Boolean,
  prospectId: String,
}, {
  timestamps: true,
  collection: 'aakashrecruitmentforms'
});

AakashRecruitmentForm.plugin(paginate);
AakashRecruitmentForm.plugin(aggregatePaginate);

module.exports = AakashRecruitmentForm;