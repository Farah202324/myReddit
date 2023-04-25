const router = require('express').Router();
const postUser = require('../controllers/postUser');
const { verifyToken } = require('../utilities/jwt');

router.post('/signed', postUser);

module.exports = router;