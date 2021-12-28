'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PageDetail = new Schema({
  page: { type: String, required: true },
  heading: String,
  first_fold_data: Object,
  test_highlight_cards: Object,
  why_should_you_take_mocktest: Object,
  test_details: Object,
  testimonal_cards: Object,
  how_to_reg: Object,
  share_invite: Object,
  faq: Object,
  register_popup: Object,
  login_popup: Object,
  active: { type: Boolean, required: true },
}, {
  collection: 'pagedetails',
  timestamps: true
});

PageDetail.plugin(paginate);
PageDetail.plugin(aggregatePaginate);

module.exports = PageDetail;
