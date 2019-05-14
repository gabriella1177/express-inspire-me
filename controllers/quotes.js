const express = require('express');
const router = express.Router();

const Quote = require('../models/Quote');

// Get a quote
router.get('/', (req, res) => {
    Quote.find({}).then(quote => {
        res.json(quote)
    })
})

// Create a quote
router.post('/', (req, res) => {
    Quote.create(req.body).then(quote => {
        res.json(quote)
    })
})

// Update a quote by id
router.put('/update/:id', (req, res) => {
    Quote.findOneAndUpdate({_id: req.params.id}, req.body).then(quote => {
        res.json(quote)
    })
})

// Delete a quote by id
router.delete('/delete/:id', (req,res) => {
    Quote.findOneAndDelete({_id: req.params.id}, req.body).then(quote => {
        res.json(quote)
    })
})


module.exports = router