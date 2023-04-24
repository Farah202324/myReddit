const router = require('express').Router();
const { deletePosts } = require('../controllers');
const { verifyToken } = require('../utilities/jwt');

router.get('/deletePost/:id', verifyToken, deletePosts);

module.exports = router;
