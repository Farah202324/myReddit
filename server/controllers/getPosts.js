const { getPosts } = require('../database/queries');

const getPost = (req, res) => {
  getPosts()
    .then((users) => {
      res.json(users.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error in getPosts' });
    });
};
module.exports = getPost;
