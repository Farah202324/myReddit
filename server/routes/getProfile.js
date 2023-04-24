const router = require('express').Router();
const { getProfile } = require('../controllers');
const { verifyToken } = require('../utilities/jwt');

router.get('/getProfile', verifyToken, getProfile);

module.exports = router;
