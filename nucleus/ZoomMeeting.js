const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ZoomMeeting = mongoose.Schema({
    name: String,
    formattedName: String,
    meetingId: String,
    description: String,
    masterAccount: String
}, {
    timestamps: true,
    collection: 'zoom_meetings'
});


ZoomMeeting.plugin(paginate);

module.exports = ZoomMeeting;
