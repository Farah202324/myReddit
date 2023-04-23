require('env2')('.env');

let DB_URL = '';

const { Pool } = require('pg');

if (process.env.NODE_ENV === 'production') {
  DB_URL = process.env.DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  DB_URL = process.env.DEV_DB_URL;
}

module.exports = new Pool({
  connectionString: DB_URL,
  ssl: process.env.NODE_ENV !== 'production' ? false : {
    rejectUnauthorized: false,
  },
});
