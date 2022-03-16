'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EmailListReport = new Schema({
  emailId: String,
  role: String,
  team: Array,
  mailType: String
}, {
    timestamps: true,
    collection: 'emaillistreports'
});

EmailListReport.plugin(paginate);
EmailListReport.plugin(aggregatePaginate);

module.exports = EmailListReport;