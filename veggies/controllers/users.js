const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('user/Signup.jsx');
});

router.post('/signup', async (req, res) => {
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10));

  User.create(req.body)
    .then((user) => {
      res.redirect('/users/login');
    })
    .catch(error => {
      console.error(error);
      res.json({ error });
    });
});

router.get('/login', (req, res) => {
  res.render('user/Login.jsx');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body

  User.findOne({ username })
    .then(async user => {
      if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          res.redirect('/veggies');
        } else {
          res.json({ error: 'password is incorrect!' });
        }
      } else {
        res.json({ error: "user doesn't exist!"});
      }
    })
    .catch(error => {
      console.error(error);
      res.json({ error });
    })
});

module.exports = router;