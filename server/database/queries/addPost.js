/* eslint-disable camelcase */
const connection = require('../config/connection');

const addPost = (title, content, image_url, user_id) => {
  const sql = {
    text: `INSERT INTO posts (title, content, image_url, user_id) 
VALUES ($1, $2, $3, $4) RETURNING *;`,
    values: [title, content, image_url, user_id],
  };
  return connection.query(sql);
};

module.exports = addPost;