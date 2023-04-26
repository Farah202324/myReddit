const router = require('express').Router();
const { addPosts } = require('../controllers');

router.post('/addPost', addPosts);

module.exports = router;