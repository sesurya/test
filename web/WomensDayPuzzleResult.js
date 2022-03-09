'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const WomensDayPuzzlResult  = new Schema({
  name: String,
  email:String,
  created_at:String,
  updated_at:String,
  puzzleCorrectCOunt:String,
  puzzle_details:Array,
  puzzleName:String,
  puzzleFinishTime:String
});


WomensDayPuzzlResult.plugin(paginate);
WomensDayPuzzlResult.plugin(aggregatePaginate);

module.exports = WomensDayPuzzlResult;//.model('womensdaypuzzleuserresults', womensDayPuzzleSubmissionModel);

