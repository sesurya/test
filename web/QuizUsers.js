'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const QuizUsers = new Schema({
  name: String,
  email: String,
  class: Number,
  quizName: String,
  quizFinishTime: String,
  quizQuestionsAttemptCount: Number,
  totalCorrectAnswerCount: Number,
  quizJourney: Array,
}, {
  collection: 'quizusers',
  timestamps: true
});

QuizUsers.plugin(paginate);
QuizUsers.plugin(mongooseAggregatePaginate);

module.exports = QuizUsers;
