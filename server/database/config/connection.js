/* eslint-disable camelcase */
require('env2')('.env');

const { Pool } = require('pg');

let DATABASE_URL = '';
const node_env = process.env.NODE_ENV;

if (node_env === 'production') {
  DATABASE_URL = 'postgres://myreddit:fnkv9eyPn2s6iN5N8KXrCLw87fmDLWqt@dpg-ch4a469n852hpi1ofneg-a.frankfurt-postgres.render.com/myreddit';
} else if (node_env === 'development') {
  DATABASE_URL = process.env.DB_URL;
} else {
  throw new Error('DB_URL NOT FOUND!');
}

module.exports = new Pool({
  connectionString: DATABASE_URL,
  ssl: false,
});
