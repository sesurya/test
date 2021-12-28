const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');

const BnatRegistration = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "phoneNumber": Number,
    "emailId": String,
    "dob": Date,
    "board": String,
    "city": String,
    "state": String,
    "interestedIn": String,
    "testName": String,
    "testQualification": String,
    "url": String,
    "utmCampaign": String,
    "utmContent": String,
    "utmSource": String,
    "lsqStats": Boolean,
    "alertReminder1": Boolean,
    "alertReminder2": Boolean,
    "active": Boolean,
    "grade": Number,
    "testVersion": Number,
    "gradeGroup": String,
    "school": String,
    "updated_at": Date
}, {
    collection: 'bnatv2registrations',
    timestamps : true
});

BnatRegistration.plugin(paginate);
BnatRegistration.plugin(aggregatePaginate);

module.exports = BnatRegistration;