'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const User = new Schema({
  userId: {       // uuid
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  grade: { type: String, required: true },
  password: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  isActive: Boolean,
}, {
  collection: 'users',
  timestamps: true,
});

User.plugin(paginate);
User.plugin(aggregatePaginate);

module.exports = User;
