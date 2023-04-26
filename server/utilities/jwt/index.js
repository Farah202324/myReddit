const jwt = require('jsonwebtoken');
require('env2')('.env');

const generateToken = (res, payload) => {
  jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256' }, (err, token) => {
    if (err) {
      res.status(401).send('Error');
    } else {
      res.cookie('token', token).send('Token successfully');
    }
  });
};


const verifyToken = (req, res, next) => {
  const recivedToken = req.cookies.token;
  if (recivedToken) {
    jwt.verify(recivedToken, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401);
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401);
  }
};

module.exports = { generateToken, verifyToken };
