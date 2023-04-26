const jwt = require('jsonwebtoken');
const { getProfile } = require('../database/queries');
// farah do not forget to remove this and add it to queries file !!
const connection = require('../database/config/connection');

const getUsersQuery = (myToken) => {
  const userId = myToken.id;
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId],
  };

  return connection.query(sql);
};
const getProfileData = async (req, res) => {
  try {
    const { token } = req.cookies;
    let myToken = null;
    if (token) {
      myToken = await new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        });
      });
    }
    if (myToken) {
      const userData = await getUsersQuery(myToken.id);
      const profileData = await getProfile(myToken.id);
      res.status(200).json({ userData: userData.rows, profileData: profileData.rows });
    } else {
      const userId = req.params.id;
      const profileData = await getProfile(userId);
      res.status(200).json({ profileData: profileData.rows });
    }
  } catch (error) {
    console.error('Error during getProfileData', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

module.exports = getProfileData;
