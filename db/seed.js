const Quote = require('../models/Quote');

const quotes = require('./quotes.json');

Quote.deleteMany({}).then(() => {
    Quote.create(quotes).then(newQuote => {
        console.log(newQuote);
    })
})