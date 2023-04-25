const router = require('express').Router();
const { getProfileData } = require('../controllers');
const { verifyToken } = require('../utilities/jwt');

router.get('/authorized/getProfileData', verifyToken, getProfileData);

module.exports = router;
