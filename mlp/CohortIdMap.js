'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const CohortIdMap = new Schema({
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

CohortIdMap.plugin(paginate);
CohortIdMap.plugin(aggregatePaginate);

module.exports = CohortIdMap;