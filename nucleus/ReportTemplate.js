const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ReportTemplate = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  formattedName: {
    type: String,
    required: true
  },
  databaseType: {
    type: String
  },
  databaseName: {
    type: String
  },
  collectionName: {
    type: String
  },
  modelName: {
    type: String
  },
  associateModels: {
    type: Array
  },
  collectionHeaders: [{
    type: String,
    required: true
  }],
  moduleCategory: {
    type: String,
    required: true
  },
  appCategory: {
    type: String,
    required: true
  },
  filters: [
    {
      column: {
        type: String,
        required: true
      },
      dataType: {
        type: String,
        required: true
      },
      options: { type: Array, default: [] }
    }
  ],
  subscribers: [{
    type: String
  }],
  createdBy: {
    type: String
  },
  updatedBy: {
    type: String
  }
}, {
  timestamps: true,
  collection: 'reporttemplates'
});

ReportTemplate.index(
  { formattedName: 1 },
  { unique: true }
);

ReportTemplate.plugin(paginate);

module.exports = ReportTemplate;
