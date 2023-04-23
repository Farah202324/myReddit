/* eslint-disable camelcase */
const connection = require('../config/connection');

const addPost = (user_id, title, content, image_url) => {
  const sql = {
    text: `INSERT INTO posts (user_id, title, content, image_url)
    VALUES ($1, $2, $3, $4)
    RETURNING id;`,
    values: [user_id, title, content, image_url],
  };
  return connection.query(sql);
};
module.exports = addPost;
