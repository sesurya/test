const mongoose = require('mongoose');

const phoneNumberDumpSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('smsUserPhoneNumbers', phoneNumberDumpSchema);
