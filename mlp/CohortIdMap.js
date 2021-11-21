'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortidMapSchema = new Schema({
    grade: String,
    board: String,
    cohort_id: String
}, {
    collection: 'cohortidmaps',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

module.exports = cohortidMapSchema;