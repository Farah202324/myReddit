const router = require('express').Router();
const { deletePosts } = require('../controllers');
const { verifyToken } = require('../jwt');

router.get('/deletePost/:id', verifyToken, deletePosts);

module.exports = router;
