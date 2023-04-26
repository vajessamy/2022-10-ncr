const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  let token = req.get('Authorization') || req.query.token
  if (token) {
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (error) {
        console.error(error);
        res.status(401).json(error)
      } else {
        req.user = decoded.user;
        req.exp = new Date(decoded.exp * 1000);
        return next()
      }
    })
  } else {
    req.user = null;
    return next();
  }
}