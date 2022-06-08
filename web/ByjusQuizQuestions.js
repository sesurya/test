'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ByjusQuizQuestions = new Schema({
    slug_name: String,
    question_part_1: String,
    answer_opt_1: String,
    answer_opt_2: String,
    answer_opt_3: String,
    answer_opt_4: String,
    correct_answer: String,
    answer_explanation: String,
    is_enabled: Boolean,
    is_deleted: Boolean,

    created_at: String,
    updated_at: String,

}, {
    timestamps: true,
    collection: 'byjusquizquestions'
});

ByjusQuizQuestions.plugin(paginate);
ByjusQuizQuestions.plugin(aggregatePaginate);

module.exports = ByjusQuizQuestions;