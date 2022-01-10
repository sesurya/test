const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate')

const Job = mongoose.Schema({
  jobId: {
    type: String,
    required: true
  },
  jobName: {
    type: String,
    required: true
  },
  jobDefinition: {
    type: String,
    required: true
  },
  jobStatus: {
    type: String,
    required: true,
    default: 'SUBMITTED'
  },
  jobParams: Object,
  output: Object,
  templateFormattedName: String,
  appCategory: String,
  moduleCategory: String,
  scheduledBy: String,
  scheduledAt: String
}, {
  timestamps: true,
  collection: 'jobs'
});

Job.index(
  { jobId: 1 },
  { unique: true }
);

Job.plugin(paginate);
Job.plugin(mongooseAggregatePaginate);

module.exports = Job;
