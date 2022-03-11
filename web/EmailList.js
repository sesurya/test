'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const EmailList = new Schema({
  emailId: String,
  role: String,
  team: String,
}, {
    timestamps: true,
    collection: 'emaillists'
});

EmailList.plugin(paginate);
EmailList.plugin(aggregatePaginate);

module.exports = EmailList;
