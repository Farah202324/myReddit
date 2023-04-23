/* eslint-disable no-unused-vars */
const { deletePost } = require('../database/queries');

const deletePosts = (req, res) => {
  const { id } = req.params;
  deletePost(id)
    .then((data) => res.redirect('/profile'))
    .catch((err) => {
      res
        .status(500)
        .json({ msg: 'There was an Error, The post has not been removed.' });
    });
};
module.exports = deletePosts;
