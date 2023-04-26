// get
// Data to Get:

// A list of all posts
// The details of a specific post (title, content, user_id, vote count, comments)
// The details of a specific user (username, email, profile picture)
// Comments on a specific post.
const getUser = require('./getUser');
const getPosts = require('./getPosts');
const getPassword = require('./getPassword');
const getProfile = require('./getProfile');

// post
// Data to Post:

// User registration information (username, email, password)
// New posts (title, content, user_id)
// New comments (content, user_id, post_id)
// Votes on posts (user_id, post_id, value).

const addPost = require('./addPost');
const deletePost = require('./deletePost');
const addUser = require('./addUser');
const vote = require('./vote');
const login = require('./login');

module.exports = {
  getUser,
  getPosts,
  getPassword,
  getProfile,
  addPost,
  deletePost,
  addUser,
  vote,
  login,
};
