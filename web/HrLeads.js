'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const HrLeads = new Schema({
    Firstname: String,
    gender: String,
    Phone:String,
    EmailAddress: String,
    mx_City:String,
    mx_Sales_Circle_City:String,
    mx_Date_of_Birth:String,
    mx_Educational_Qualification:String,
    mx_Graduation_Year:String,
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

}, {
    timestamps: true,
    collection: 'hrleads'
});

HrLeads.plugin(paginate);
HrLeads.plugin(aggregatePaginate);

module.exports = HrLeads;