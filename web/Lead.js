'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');

const Schema = mongoose.Schema;

// Note: Considered leadsquared predefined names so dint followed proper naming conventions
const Lead = new Schema({
    FirstName: String,
    mx_State: String,
    Phone: String,
    mx_City: String,
    grade: String,
    pincode: String,
    EmailAddress: String,
    Website: String,
    WebsiteLeadType: String,
    mx_Course_Name: String,
    mx_Topic_Name: String,
    mx_Session_Date: String,
    mx_Session_Time: String,
    mx_Source_of_Lead: String,
    mx_UTM_Term: String,
    mx_UTM_Match_Type: String,
    mx_UTM_Network: String,
    mx_UTM_Device: String,
    mx_UTM_Site: String,
    mx_UTM_Ad_Position: String,
    mx_Inbound_Enquiry_Date: String,
    MXHOrgCode: Number,
    MXHLandingPageId: String,
    MXHFormBehaviour: Number,
    MXHOutputMessagePosition: Number,
    MXHFormDataTransfer: Number,
    MXHRedirectUrl: String,
    MXHAsc: Number,
    MXHFormName: String,
    SourceCampaign: String,
    SourceMedium: String,
    SourceContent: String,
    UtmSource: String,
    CampaignId: String,
    tllmsUserAttributes: Array,
    tllmsUserType: String,
    redirectionSource: String,

    isCustomActivity: Boolean,
    ActivityEvent: Number,
    ActivityNote: String,

    mx_Campaign_Type: String,
    mx_Facebook_Campaign_Date: String,

    mx_Course: String,
    mx_Sales_Circle_City: String,
    mx_Date_of_Birth: Date,
    mx_Educational_Qualification_UPSC: String,
    mx_Graduation_Year: Number,
    mx_Resume_URL: String,
    mx_Gender: String,
    slugName: String,
    referralUrl: String,
    utm_campaign: String,
    utm_median: String,

    mx_Corporate_Name: String,
    mx_Corporate_Campaign_Date: String,
    mx_Corporate_Employee_ID: String,
    mx_Corporate_Employee_Id_Proof: String,
    EmployeeID: String,
    parentGaurdianIndicator: String,
    mx_School: String,
    childPerformance: String,
    isGoForTuition: String,
    takeCarerOFChild: String,
    mx_Comment: String,
    url: String,
    isNumberAlreadyExistFlag: String,
    jwtToken: String,
    page: String,

    c1h2e3c4k5d6u7p8l9i1c2a3t4e5: String,

    mx_FB_Source_Campaign: String,
    mx_utm_Term: String,
    mx_Gclid: String,
    mx_Fbclid: String,

    countryCode: String,

    centerName: String,
    mx_School: String,
    schoolUniversalId: String,

    medium_of_institution: String,
    school_grade: String,
    school_verified_status: String,

    isCronJobRan: Boolean,
    lsRequestID: String,
    lastRunCronJobDate: Date,

    createdAt: Date,
    updatedAt: Date,
}, {
    timestamps: true,
    collection: 'leads'
});

Lead.plugin(paginate);
Lead.plugin(aggregatePaginate);

module.exports = Lead;