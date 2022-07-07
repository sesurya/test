'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const Comments = new Schema({
    author: String,
    email: String,
    comment: String,
    mobileNumber: String,
    commentParent: String,
    commentId: String,
    url: String,
    isApproved: Boolean,
    isDeleted: Boolean,

    createdAt: Date

}, {
    timestamps: true,
    collection: 'comments'
});

Comments.plugin(paginate);
Comments.plugin(aggregatePaginate);

module.exports = Comments;