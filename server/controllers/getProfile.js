const { getProfile } = require('../database/queries');

const getProfileData = (req, res) => {
  getProfile(req.user.id)
    .then((users) => {
      req.post = users.rows;
      res.json(users.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error in getProfile' });
    });
};
module.exports = getProfileData;
