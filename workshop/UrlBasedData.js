'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortData = new Schema({
  cohort_id: Number,
  cohort_name: String,
  sequence_id: String,
});

const courseData = new Schema({
  course_name: String,
  display_order: Number,
  is_selected: Boolean,
  cohort_id: Number,
});

const gradeDetail = new Schema({
  is_grade_field_enabled: Boolean,
  grade_default_value: String,
  grade_default_tllms: Boolean,
  grade_default_tllms_value: String,
});

const cityDetail = new Schema({
  is_city_field_enabled: Boolean,
  city_default_value: String,
  city_default_tllms: Boolean,
  city_default_tllms_value: String,
});

const urlBasedData = new Schema({
  url: String,
  course_type: String,
  page_title: String,
  page_description: String,
  logo_link: String,
  cohorts: [cohortData],
  courses: [courseData],
  gradeDetails: gradeDetail,
  cityDetails: cityDetail,
  whatsapp_enabled: Boolean,
  course_enabled: Boolean,
}, {
  collection: 'urlbaseddatas',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = urlBasedData;
