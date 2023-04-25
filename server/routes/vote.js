const router = require('express').Router();
const { processVote } = require('../controllers');

router.post('/authorized/vote', processVote);

module.exports = router;
