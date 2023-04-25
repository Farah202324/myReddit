/* eslint-disable camelcase */
const connection = require('../config/connection');

const addPost = (title, content, image_url) => {
  const sql = {
    text: `INSERT INTO posts (title, content, image_url)
    VALUES ($1, $2, $3)
    RETURNING *;`,
    values: [title, content, image_url],
  };
  return connection.query(sql);
};

module.exports = addPost;

