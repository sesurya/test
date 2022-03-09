'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const CommonUtilsDbEnvs = new Schema({
  notificationServiceOtp: String,
  notificationServiceOtpClientId: String,
  diwaliHamperOrderFlag: Boolean,
  diwaliHamperOrderPunchAPI: String,
  diwaliHamperOrderPunchAuthKey: String,
  mlp_get_voucher_api: String,
  mlp_voucher_x_api_key: String,
  mlp_voucher_link: String,
  shopify_shared_secret: String,
  AWS_BUCKET_NAME: String,
  SECRET_CRYPTO_KEY: String,
  sendMail: Boolean
}, {
  timestamps: true,
  collection: 'commonutilsdbenvs'
});

CommonUtilsDbEnvs.plugin(paginate);
CommonUtilsDbEnvs.plugin(aggregatePaginate);

module.exports = CommonUtilsDbEnvs;
