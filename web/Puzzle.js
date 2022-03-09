'use strict';

const { number, string } = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzlesModel  = new Schema({
  name: String,
  puzzle_no:Number,
  puzzle_type:String,
  clue:String,
  answer:String,
  
});


module.exports = mongoose.model('puzzles', puzzlesModel);

