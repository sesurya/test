'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolList = new Schema({
  schoolId: String,
  schoolName: String,
  schoolAbbreviatedNames: Array,
  schoolAddress: String,
  schoolPincode: Number,
  schoolCity: String,
  schoolCityAliasNames: Array,
  schoolDistrict: String,
  schoolState: String,
  schoolHub: String,
  approvedSchoolId: Number,
  generatedSchoolId: Number,
  schoolGrade: String,
  schoolAreaName: String,
  schoolBoard: String,
  schoolCityID: Number,
  agencyPartnerId: Number,
  agencyPartnerName: String,
}, {
  collection: 'school-lists',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = schoolList;
