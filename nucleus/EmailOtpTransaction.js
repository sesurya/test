'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EmailOtpTransaction = new Schema({
    emailId: { type: String, required: true, unique: true},
    otpValue: { type: Number },
    active: { type: Boolean },
    page: { type: String },
    isVerified: { type: Boolean },
    otpEmailCount: { type: Number },
    initialOTPAttempt: { type: Date },
    otpCreatedTime: { type: Date },
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