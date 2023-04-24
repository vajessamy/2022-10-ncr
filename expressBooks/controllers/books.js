const express = require('express');
const router = express.Router()
const Book = require('../models/book')


//routes remeber INDUCES
//Index
// router.get('/', (req, res) => {
//     Book.find({})
//     .then(result => {
//         res.render('Index', {
//             books: result
//         })
//     })
//     .catch(error => {
//         console.error(error)
//         res.send(error)
//     })
// })

//New
router.get('/new', (req, res) => {
    res.render('New')
})

//Delete
router.delete('/:id', (req, res) => {
   Book.deleteOne({_id: req.params.id}) 
   .then(result => {
    console.log(result);
    res.redirect('/books')
   })
   .catch(error => {
    console.error(error)
    res.send(error)
   })
})

//Update
router.put('/:id', (req, res) => {
    if(req.body.savebook == 'on'){
        req.body.savebook = true
    } else {
        req.body.savebook = false
    }
    Book.updateOne({_id: req.params.id }, req.body)
     .then(result => {
        console.log(result);
        res.redirect('/books/${req.params.id}')
    })
    .catch(error => {
        console.error(error)
        res.send(error)
    })
})

//Create
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(result => {
       console.log(result);
       res.redirect('/books');
    })
    .catch(error => {
        console.error(error)
        res.send(error)
    })
})

//Edit
router .get('/:id/edit', (req, res)  => {
    Book.findone({_id: req.params.id})
    .then(result => {
        res.render('Edit', {book: result})
    })
    .catch(error => {
        console.error(error);
        res.send(error);
    })
})

//Show
router.get('/:id', (req, res) => {
    Book.findOne({_id: req.params.id})
    .then(result => {
        res.render('Show', {book: result});
    })
    .catch(error => {
        console.error(error);
        res.send(error);
    })
})


module.exports = router;
