const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.USER_NAME,
  host: 3000,
  database: process.env.DATA_BASE,
  password: process.env.PASSWORD,
  port: 5432,
});

module.exports = { pool };
