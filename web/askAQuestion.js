'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const askAQuestion = new Schema({
    name: String,
    mobile: String,
    email: String,
    grade: String,
    audioFilePath: String,
    questionText: String,
    createdAt: String
}, {
  timestamps: true,
  collection: 'askaquestionentries'
});

askAQuestion.plugin(paginate);
askAQuestion.plugin(aggregatePaginate);

module.exports = askAQuestion;