const login = require('./getUser');
const postUser = require('./postUser');
const getPosts = require('./getPosts');
const addPosts = require('./addPosts');
const getProfileData = require('./getProfile');
const deletePosts = require('./deletePosts');
const processVote = require('./vote');

module.exports = {
  login,
  postUser,
  getPosts,
  addPosts,
  getProfileData,
  deletePosts,
  processVote,
};
