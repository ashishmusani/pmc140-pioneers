const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const attendeeModel = Schema({
    attendeeName: String,
    attendeeEmail: String,
    attendanceProgram: String,
    attendanceSection: String
});
module.exports = mongoose.model('Attendee', attendeeModel);