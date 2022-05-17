const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ZoomAttendee = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    longUrl: String,
    shortUrl: String,
    meetingId: String,
    uploadfile: String,
    createdBy: String,
    updatedBy: String
}, {
    timestamps: true,
    collection: 'zoom_attendees'
});


ZoomAttendee.plugin(paginate);

module.exports = ZoomAttendee;
