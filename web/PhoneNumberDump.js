const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');
const Schema = mongoose.Schema;

const PhoneNumberDump = new Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
  },
  lastSentDate: {
    type: Date,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'smsUserPhoneNumbers'
});

PhoneNumberDump.plugin(paginate);
PhoneNumberDump.plugin(aggregatePaginate);

module.exports = ApiMessage;
