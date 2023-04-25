const router = require('express').Router();
const { getPosts } = require('../controllers');

router.get('/authorized/getPosts', getPosts);
router.get('/public/getPosts', getPosts);
module.exports = router;
