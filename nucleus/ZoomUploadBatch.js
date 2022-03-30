const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ZoomUploadBatch = mongoose.Schema({
    filename: String,
    formattedName: String,
    fileUrl: String,
    recordsCount: Number,
    status: String,
    createdBy: String,
    updatedBy: String,
    account: String
}, {
    timestamps: true,
    collection: 'zoom_upload_batches'
});


ZoomUploadBatch.plugin(paginate);

module.exports = ZoomUploadBatch;
