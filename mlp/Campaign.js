'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Campaign = new Schema({
    id: { type: Number, required: true },
    campaign_name: { type: String, required: true },
    amount: { type: Number, required: true }
}, {
    collection: 'campaigns',
    timestamps: {
        startDate: 'start_date',
        endDate: 'end_date',
    }
});

module.exports = Campaign;