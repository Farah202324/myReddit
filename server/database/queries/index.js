const getUser = require('./getUser');
const getPosts = require('./getPosts');
const getPassword = require('./getPassword');
const getProfile = require('./getProfile');

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
