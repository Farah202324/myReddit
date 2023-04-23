const router = require('express').Router();
const { getPosts } = require('../controllers');

router.get('/getPosts', getPosts);

module.exports = router;
