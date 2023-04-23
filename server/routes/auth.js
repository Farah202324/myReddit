// this one comntain login logout and authentication routes.
const router = require('express').Router();
const { join } = require('path');
const { verifyToken } = require('../jwt');

router.get('/authorized', verifyToken, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'pages', 'authorized', 'html', 'home.html'));
});

module.exports = router;
