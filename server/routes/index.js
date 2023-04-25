// Define the home page route.
// here we handle the / endpoint and it suppose to index to home or welcome page.
const router = require('express').Router();
const getUser = require('./getUser');
const  postUser = require('./postUser');
const  addPost  = require('./addPosts');
const auth = require('./auth');
const logout = require('./logout');
const getPosts = require('./getPosts');
const  getProfileData  = require('./getProfile');

const deletePost = require('./deletePost');
const vote = require('./vote');

router.use(getUser);
router.use(deletePost);
router.use(postUser);
router.use(getProfileData);
router.use(addPost);
router.use(auth);
router.use(logout);
router.use(getPosts);
router.use(vote);
module.exports = router;
