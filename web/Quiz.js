'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Quiz = new Schema({
  name: String,
  question: {
    questionPartOne: String,
    questionImagesPartOne: Array,
    questionList: Array,
    questionOptionsListIn: String, // alpha, number, bullets
    questionPartTwo: String,
    questionType: String,
    questionImagesPartTwo: Array,
    optionType: String,
    questionTextBoxBeforeText: String,
    questionSymbol: String,
    questionText: String,
  },
  options: Array,

  textBoxAns: String,
  numberOfFields: String,
  matchTheFollowingLhs: Array,
  matchTheFollowingRhs: Array,
  imageOptions: Array,
  seriesArray: Array,
  lineQuestionArray: Array,
  textBoxBeforeText: String, 
  matchTheFollowingColors: Array,
  matchTheFollowingAns: Array,
  sutableNumberArray: Array,
  roman1: String,
  roman2: String,

  optionsListIn: String, // alpha, number, bullets
  answer: String,
  keyAnswer: String,
  multiBoxAnswers: Array,
  solution: {
    solutionPartOne: String,
    solutionList: Array,
    solutionOptionsListIn: String, // alpha, number, bullets
    solutionPartTwo: String,
  },
  correctAnswerResponseWord: String,
  correctAnswerResponse: String,
  wrongAnswerResponseWord: String,
  wrongAnswerResponse: String,
  isPrivate: Boolean,
  createdAt: Date,
}, {
  timestamps: true,
  collection: 'quiz'
});

Quiz.plugin(paginate);
Quiz.plugin(aggregatePaginate);

module.exports = Quiz;
