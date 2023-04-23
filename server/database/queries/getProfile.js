const connection = require('../config/connection');

const getProfile = (id) => {
  const sql = {
    text: 'SELECT posts.* , users.username FROM posts , users WHERE users.id = posts.user_id AND users.id =($1)',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getProfile;
