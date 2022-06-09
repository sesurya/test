'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const LikesAndDislikes = new Schema({
    url: String,
    likeCount: Array,
    dislikeCount: Array,

    created_at: String,
    updated_at: String,

}, {
    timestamps: true,
    collection: 'likesanddislikes'
});

LikesAndDislikes.plugin(paginate);
LikesAndDislikes.plugin(aggregatePaginate);

module.exports = LikesAndDislikes;