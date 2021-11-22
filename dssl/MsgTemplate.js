'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const MsgTemplate = new Schema({
  templateGroup: String, // OTP
  smsTemplate: String, // SMS Body
}, {
  collection: 'msg-templates',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

MsgTemplate.plugin(paginate);
MsgTemplate.plugin(aggregatePaginate);

module.exports = MsgTemplate;
