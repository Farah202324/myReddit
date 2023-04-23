/* eslint-disable camelcase */
const { addPost } = require('../database/queries');

const addPosts = (req, res) => {
  const { title, content, image_url } = req.body;
  addPost(title, content, image_url, req.user.id)
    .then((users) => {
      res.redirect('/authorized');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error in adding posts' });
    });
};
module.exports = addPosts;
