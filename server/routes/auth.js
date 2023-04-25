const router = require('express').Router();
const { join } = require('path');
const { verifyToken } = require('../utilities/jwt');

router.get('/authorized', verifyToken, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'authorized'));
});

module.exports = router;
