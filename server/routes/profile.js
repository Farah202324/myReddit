const router = require('express').Router();
const { join } = require('path');
const { verifyToken } = require('../utilities/jwt');

router.get('/profile', verifyToken, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'autherized', 'html', 'profile.html'));
});

module.exports = router;
