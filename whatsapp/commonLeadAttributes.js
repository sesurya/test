'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commonLeadLocationAttributes = new Schema({
    city: String,
    state:  String,
    pincode: Number,
    
  });
  
const commonLeadProfileDetails = new Schema({
    boardName: String,
    userProfile:  String,
    schoolName: String,
    
  });

const commonLeadJourneyDetails = new Schema({
    group: String,
    optionChoosed:  String,
    status: String,
    counsellingBooked: Boolean,
    
  });

  module.exports = {commonLeadLocationAttributes, commonLeadProfileDetails, commonLeadJourneyDetails};

