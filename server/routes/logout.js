const router = require('express').Router();

router.get('/authorized/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/public');
});

module.exports = router;
