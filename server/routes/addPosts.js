const router = require('express').Router();
const addPosts = require('../controllers/addPosts');

router.post('/addPost', addPosts);

module.exports = router;
