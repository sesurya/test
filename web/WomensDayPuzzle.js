'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const womensDayPuzzleModel  = new Schema({
  name: String,
  puzzle_no:Number,
  puzzle_type:String,
  clue:String,
  answer:String,
});


module.exports = mongoose.model('womensdaypuzzles', womensDayPuzzleModel);

