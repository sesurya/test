'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diwalihamperpartneremailsModel = new Schema({
  partnerEmailOne: String,
  partnerEmailTwo: String,
  partnerEmailThree: String,
  name: String
});

module.exports = mongoose.model('diwalihamperpartneremails', diwalihamperpartneremailsModel);
