const connection = require('../config/connection');

const loginQuery = async (email) => {
  const sql = {
    text: 'SELECT id, username, email, password FROM users WHERE email=$1 ;',
    values: [email],
  };

  try {
    const { rows, rowCount } = await connection.query(sql);
    return { rows, rowCount };
  } catch (error) {
    console.error('Error during login query', error);
    throw error;
  }
};

module.exports = loginQuery;
