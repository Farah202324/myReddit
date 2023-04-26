const jwt = require('jsonwebtoken');
const connection = require('../database/config/connection');
const { addPost } = require('../database/queries');
require('dotenv').config();

const getUsersQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId],
  };

  return connection.query(sql);
};

const addPosts = async (req, res) => {
  const { title, content, image_url } = req.body;
  const { token } = req.cookies;
  try {
    const myToken = await jwt.verify(token, process.env.SECRET_KEY);
    const userData = await getUsersQuery(myToken.id);
    const user_id = userData.rows[0].id;
    await addPost(title, content, image_url, user_id);
    res.redirect('/authorized');
  } catch (error) {
    console.error('Error ', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

module.exports = addPosts;
