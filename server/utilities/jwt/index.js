const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (res, payload) => {
  jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
    if (err) {
      res.status(401).send('Error');
    } else {
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }).send('Cookie set successfully');
    }
  });
};

const verifyToken = (req, res, next) => {
  const receivedToken = req.cookies.token;
  if (receivedToken) {
    jwt.verify(receivedToken, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).send('Invalid or expired token');
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).redirect('/authorized');
  }
};

module.exports = { generateToken, verifyToken };
