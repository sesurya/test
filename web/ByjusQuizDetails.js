'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const ByjusQuizDetails = new Schema({
    slug_name: String,
    quiz_title: String,
    quiz_body_title: String,
    quiz_body_desc: String,
    quiz_answer_title: String,
    edu_name: String,
    edu_type: String,
    edu_subject: String,
    edu_grade: String,
    edu_topic: String,
    edu_about: String,
    edu_quiz_name: String,
    has_explanation: Boolean,
    is_enabled: Boolean,

    created_at: String,
    updated_at: String,

}, {
    timestamps: true,
    collection: 'byjusquizdetails'
});

ByjusQuizDetails.plugin(paginate);
ByjusQuizDetails.plugin(aggregatePaginate);

module.exports = ByjusQuizDetails;