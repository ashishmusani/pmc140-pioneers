const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionModel = Schema({
    question: String,
    name: String,
    email: String
});
module.exports = mongoose.model('Question', questionModel);