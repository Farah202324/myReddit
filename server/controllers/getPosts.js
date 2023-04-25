const { getPosts } = require('../database/queries');

const getPost = (req, res) => {
  getPosts()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error in getPosts' });
    });
};
module.exports = getPost;
