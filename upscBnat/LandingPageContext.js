'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const TestMetaData = new Schema({
  step_number: { type: Number, required: true },
  registration_close_date: { type: Date, required: true },
  result_date: { type: Date, required: true },
  assessment_report_date: { type: Date, required: true },
  is_bnat_and_grade_overlap: Number,
  assesment_report_duration: Number,
  exam_date_time: Date,
  exam_duration_time: String,
  questions_count: Number,
  sub_questions_count: Number,
  sub_duration_time: String,
  dob_start_date: Date,
  dob_end_date: Date,
  enable_helpline_phone_no: Number,
  query_email_id: String,
  query_phone_no: Number,
  button_title: [String],
});

const LandingPageContext = new Schema({
  page: { type: String, required: true },
  testVersion: { type: Number, required: true },
  main_data: { type: TestMetaData, required: true },
  password_hint: Object,
  terms_conditions: Object,
  reg_form: Object,
  success_reg: Object,
  dom_text: Object,
  faq: Object,
  active: { type: Boolean, required: true },
}, {
  collection: 'landingpagecontexts'
});

LandingPageContext.plugin(paginate);
LandingPageContext.plugin(aggregatePaginate);

module.exports = LandingPageContext;
