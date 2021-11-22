const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const GridTemplate = mongoose.Schema({
  gridId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  columns: {
    type: Array,
    required: true,
    default: []
  },
  contextCriterias: [],
  shareWith: String,
  isFavorite: Boolean,
  viewName: String,
  viewFormattedName: String,
  createdBy: String,
  updatedBy: String,
  pillPosition: Number
},
  {
    timestamps: true,
    collection: 'gridtemplates',
  }
);

GridTemplate.plugin(paginate);

module.exports = GridTemplate;
