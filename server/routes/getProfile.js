const router = require('express').Router();
const { getProfile } = require('../controllers');
const { verifyToken } = require('../jwt');

router.get('/getProfile', verifyToken, getProfile);

module.exports = router;
