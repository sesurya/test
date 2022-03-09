'use strict';

const { number, string, array } = require('@hapi/joi');
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
});


PuzzleUserResult.plugin(paginate);
PuzzleUserResult.plugin(aggregatePaginate);

module.exports = PuzzleUserResult;//.model('puzzleUserResults', puzzleSubmissionModel);

