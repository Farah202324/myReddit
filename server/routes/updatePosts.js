const { updatePosts } = require('../database/queries');

const updatePosts = (req, res) => {
  updatePosts()
    .then((users) => {
      res.json(users.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};
module.exports = updatePosts;
