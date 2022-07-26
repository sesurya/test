'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EmailOtpTransaction = new Schema({
    emailId: { type: String, required: true, unique: true},          // User Email ID
    otpValue: { type: Number },                                      // otp
    active: { type: Boolean },                                       // otp is active or not
    page: { type: String },                                          // campaign name
    isVerified: { type: Boolean },                                   // sent otp is verified or not  
    otpEmailCount: { type: Number },                                 // otp count
    initialOTPAttempt: { type: Date },                               // First Otp Attempt (Reset every 10hrs if requested)
    otpCreatedTime: { type: Date },                                  // Otp Generated Time
}, {
    collection: 'email_otp_transactions',
    timestamps:{
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

EmailOtpTransaction.plugin(paginate);
EmailOtpTransaction.plugin(aggregatePaginate);

module.exports = EmailOtpTransaction;