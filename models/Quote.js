const mongoose = require('../db/connection');

const Quote = new mongoose.Schema({
    quoteAuthor: String,
    quoteText: String
})

module.exports = mongoose.model('Quote', Quote)