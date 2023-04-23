const router = require('express').Router();
const { addPost } = require('../controllers');
const { verifyToken } = require('../jwt');

router.post('/addPost', verifyToken, addPost);

module.exports = router;
