/* eslint-disable camelcase */
const connection = require('../config/connection');

const deletePost = (post_id) => {
  const sql = {
    text: `DELETE FROM posts
        WHERE id = $1;`,
    values: [post_id],
  };
  return connection.query(sql);
};
module.exports = deletePost;
