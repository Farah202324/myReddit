/* eslint-disable camelcase */
const connection = require('../config/connection');

const vote = (post_id, user_id, value) => {
  const sql = {
    text: 'INSERT INTO votes (post_id, user_id, value) VALUES ($1, $2, $3)',
    values: [post_id, user_id, value],
  };
  return connection.query(sql);
};

module.exports = vote;
