'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PuzzleUserResult  = new Schema({
  name: String,
  email:String,
  created_at:String,
  updated_at:String,
  puzzleCorrectCOunt:String,
  puzzle_details:Array,
  puzzleName:String,
  puzzleFinishTime:String
}, {
  timestamps: true,
  collection: 'puzzleuserresults'
});


PuzzleUserResult.plugin(paginate);
PuzzleUserResult.plugin(aggregatePaginate);

module.exports = PuzzleUserResult;

