const router = require('express').Router();
const { getProfileData } = require('../controllers');

router.get('/getProfileData', getProfileData);

module.exports = router;
