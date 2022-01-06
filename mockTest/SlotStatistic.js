'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const SlotStatistic = new Schema({
  examId: String,
  examName: String,
  active: Boolean,
  registrationCount: Number,
  gradeGroup: Array,
}, {
  collection: 'slotstatistics',
  timestamps: true
});

SlotStatistic.plugin(paginate);
SlotStatistic.plugin(aggregatePaginate);

module.exports = SlotStatistic;
