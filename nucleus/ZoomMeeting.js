const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ZoomMeeting = mongoose.Schema({
    name: String,
    meetingId: { type: String, required: true, unique: true },
    description: String,
    account: String,
    createdBy: String,
    updatedBty: String
}, {
    timestamps: true,
    collection: 'zoom_meetings'
});


ZoomMeeting.plugin(paginate);

module.exports = ZoomMeeting;
