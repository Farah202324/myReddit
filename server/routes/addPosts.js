const router = require('express').Router();
const { addPost } = require('../controllers');
const { verifyToken } = require('../utilities/jwt');

router.post('/addPost', verifyToken, addPost);

module.exports = router;
