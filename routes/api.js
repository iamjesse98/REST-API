const express = require('express')
const router = express.Router()

// get a list of person from the db
router.get('/people', (req, res) => {
    res.send({type: 'GET'})
})

// add a new person to the db
router.post('/people', (req, res) => {
    console.log('You made a POST request: ', req.body)
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    })
})

// update a person in the db
router.put('/people/:id', (req, res) => {
    res.send({type: 'PUT'})
})

// delete a person from the db
router.delete('/people/:id', (req, res) => {
    res.send({type: 'DELETE'})
})

module.exports = router
