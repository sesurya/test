'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SchoolRegistration = new Schema({
  name: String,
  emailId: String,
  userType: String,
  mobileNumber: Number,
  stepCompleted: Number,
  schoolCity: String,
  schoolName: String,
  schoolWebsite: String,
  schoolState: String,
  schoolDistrict: String,
  schoolAddress: String,
  schoolPincode: Number,
  principalName: String,
  principalEmail: String,
  principalPhone: Number, // keep the validaiton between 8 - 10 digits.
  schoolCode: String,
  isNewSchoolCity: Boolean,
  isNewSchoolName: Boolean,
  schoolUUID: String,
  schoolHub: String,
  schoolId: Boolean,
  approvedSchoolId: Number,
  generatedSchoolId: Number,
  season: Number,
  cronJobFlag: Boolean,
  schoolGrade: String,
  schoolCityID: Number,
  schoolAreaName: String,
  schoolAbbreviatedNames: Array,
  schoolCityAliasNames: Array,
  agencyPartnerId: Number,
  agencyPartnerName: String,
}, {
  collection: 'school-registrations',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

SchoolRegistration.plugin(paginate);
SchoolRegistration.plugin(aggregatePaginate);

module.exports = SchoolRegistration;
