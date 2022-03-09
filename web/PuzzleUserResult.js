'use strict';

const { number, string, array } = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleSubmissionModel  = new Schema({
  name: String,
  email:String,
  created_at:String,
  updated_at:String,
  puzzleCorrectCOunt:String,
  puzzle_details:Array,
  puzzleName:String,
  puzzleFinishTime:String
});


module.exports = mongoose.model('puzzleUserResults', puzzleSubmissionModel);

