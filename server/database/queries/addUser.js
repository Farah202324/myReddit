/* eslint-disable camelcase */
const connection = require('../config/connection');

const addUser = (username, email, password, profile_picture) => {
  const sql = {
    text: 'INSERT INTO users (username, email, password, profile_picture) VALUES ($1, $2, $3, $4) RETURNING *;',
    values: [username, email, password, profile_picture],
  };
  return connection.query(sql);
};

module.exports = addUser;
