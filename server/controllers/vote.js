/* eslint-disable camelcase */
const { vote } = require('../database/queries');

const processVote = (req, res) => {
  const { postId, value } = req.body;
  processVote(postId, req.user.id, value)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error in adding vote' });
    });
};

module.exports = processVote;
