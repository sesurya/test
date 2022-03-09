'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const womensDayPuzzleSubmissionModel  = new Schema({
  name: String,
  email:String,
  created_at:String,
  updated_at:String,
  puzzleCorrectCOunt:String,
  puzzle_details:Array,
  puzzleName:String,
  puzzleFinishTime:String
});


module.exports = mongoose.model('womensdaypuzzleuserresults', womensDayPuzzleSubmissionModel);

