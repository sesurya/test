'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');

const User = new Schema({
  emailId: {type: String, required: true},
  role: {type: String, required: true},
  isActive: Boolean,
}, {
  collection : "users"
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

User.plugin(paginate);
User.plugin(aggregatePaginate);

module.exports = User;