const router = require('express').Router();
const { login } = require('../controllers');

router.post('/authorized/logged', login);

module.exports = router;
