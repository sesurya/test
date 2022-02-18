'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const HrLeadsForm = new Schema({
    Firstname: String,
    Phone:String,
    EmailAddress: String,
    mx_City:String,
    mx_Sales_Circle_City:String,
    mx_Date_of_Birth:String,
    mx_Educational_Qualification:String,
    mx_Graduation_Year:String,
    mx_Resume_URL:String,
    mx_Gender:String,
    mx_Course:String,
    mx_Source_of_Lead:String,
    SourceMedium:String,
    MXOrgCode:String,
    MXHLandingPageId:String,
    MXHAsc:String,
    MXHFormBehaviour:String,
    mx_Course_Name:String,
    slugName:String,
    Website:String,
    createdAt: Date,
    updatedAt: Date,

    lsRequestID: String,
    lsqStats: Boolean,
    prospectId: String,

}, {
    timestamps: true,
    collection: 'hrleads'
});

HrLeadsForm.plugin(paginate);
HrLeadsForm.plugin(aggregatePaginate);

module.exports = HrLeadsForm;