'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const WomensDayPuzzle = new Schema({
  name: String,
  puzzle_no:Number,
  puzzle_type:String,
  clue:String,
  answer:String,
}, {
  timestamps: true,
  collection: 'womensdaypuzzles'
});


WomensDayPuzzle.plugin(paginate);
WomensDayPuzzle.plugin(aggregatePaginate);

module.exports = WomensDayPuzzle;
