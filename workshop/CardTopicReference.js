'use strict';

const mongoose = require('mongoose');
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

module.exports = CardTopicReference;
