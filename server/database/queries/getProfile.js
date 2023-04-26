const connection = require('../config/connection');

const getProfileData = async (id) => {
  try {
    const sql = {
      text: 'SELECT posts.*, users.username FROM posts INNER JOIN users ON users.id = posts.user_id WHERE users.id = $1',
      values: [id],
    };
    const { rows } = await connection.query(sql);
    return rows;
  } catch (error) {
    console.error('Error during getProfile query', error);
    throw error;
  }
};

module.exports = getProfileData;

