'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TitleMeta = new Schema({
  url: String,
  title: String,
  description: String,
  h1: String,
  instance: String,
  user: String,
  isActive: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
  },
  collection: 'titlemeta'
});

module.exports = TitleMeta;
