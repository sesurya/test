'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const CardTopicReference = new Schema({
  cardId: String,
  topicId: String,
}, {
  collection: 'cardtopicreferences',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

CardTopicReference.plugin(paginate);
CardTopicReference.plugin(aggregatePaginate);

module.exports = CardTopicReference;
