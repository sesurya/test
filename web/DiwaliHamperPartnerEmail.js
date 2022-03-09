'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const DiwaliHamperPartnerEmail = new Schema({
  partnerEmailOne: String,
  partnerEmailTwo: String,
  partnerEmailThree: String,
  name: String
}, {
  timestamps: true,
  collection: 'diwalihamperpartneremails'
});

DiwaliHamperPartnerEmail.plugin(paginate);
DiwaliHamperPartnerEmail.plugin(aggregatePaginate);

module.exports = DiwaliHamperPartnerEmail;
