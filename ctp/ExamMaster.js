const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const aggregatePaginate = require('mongoose-aggregate-paginate');

const ExamMaster = mongoose.Schema({
    "examName": String,
    "gradeValues": Array
}, {
    collection: 'examlists',
});

ExamMaster.plugin(paginate);
ExamMaster.plugin(aggregatePaginate);

module.exports = ExamMaster;