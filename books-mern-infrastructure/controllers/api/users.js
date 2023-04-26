  
  const User = require('../../models/user');
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');
  
  const createJWT = (user) => {
    return jwt.sign(
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    )
  }
  
  const create = (req, res) => {
    console.log(req.body);
    User.create(req.body)
      .then(result => {
        const token = createJWT(result);
        res.status(201).json(token);
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error);
      });
  }
  
  const login = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (req.body.password) {
          bcrypt.compare(req.body.password, user.password, (error, result) => {
            if (error) {
              res.status(401).json(error)
            } else {
              if (result) {
                res.status(200).json(createJWT(user))
              } else {
                res.status(401).json({ error: 'Incorrect password!' });
              }
            }
          })
        }
      })
      .catch(error => {
        console.error(error);
        res.status(404).json(error)
      })
  }
  
  const checkToken = (req, res) => {
    console.log('req.user', req.user);
    res.json(req.exp);
  }
  
  module.exports = {
    create,
    login,
    checkToken
  }
  