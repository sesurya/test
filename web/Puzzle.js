'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Puzzle  = new Schema({
  name: String,
  puzzle_no:Number,
  puzzle_type:String,
  clue:String,
  answer:String,  
}, {
  timestamps: true,
  collection: 'puzzles'
});

Puzzle.plugin(paginate);
Puzzle.plugin(aggregatePaginate);

module.exports = Puzzle;

