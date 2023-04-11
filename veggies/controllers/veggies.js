const express = require('express');
const router = express.Router()
const Veggie = require('../models/veggie')

// REMEMBER INDUCES

// Index
router.get('/', (req, res) => {
  Veggie.find({})
    .then(result => {
      res.render('Index', {
        veggies: result
      })
    })
    .catch(error => {
      console.error(error)
      res.send(error)
    })
})

// New
router.get('/new', (req, res) => {
  res.render('New')
})

// Delete
router.delete('/:id', (req, res) => {
  Veggie.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      res.redirect('/veggies')
    })
    .catch(error => {
      console.error(error)
      res.send(error)
    })
})

// Update
router.put('/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  } Veggie.updateOne({ _id: req.params.id }, req.body)
    .then(result => {
      console.log(result);
      res.redirect(`/veggies/${req.params.id}`);
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    })
})

// Create
router.post('/', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
      } else {
        req.body.readyToEat = false
      }
    Veggie.create(req.body)
    .then(result => {
      console.log(result);
      res.redirect('/veggies');
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    })
})

// Edit (findone is from mongoose)
router.get('/:id/edit', (req, res) => {
  Veggie.findOne({ _id: req.params.id })
    .then(result => {
      res.render('Edit', { veggie: result });
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    })
})

// Show
router.get('/:id', (req, res) => {
  Veggie.findOne({ _id: req.params.id })
    .then(result => {
      res.render('Show', { veggie: result });
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    })
})

module.exports = router;