const dotenv = require('dotenv');
const sql = require('./db');

dotenv.config();

const dropTables = async () => {
  await sql.connect();
  await sql.query('DROP TABLE IF EXISTS Users;');
  await sql.query('DROP TABLE IF EXISTS Attribute;');
  await sql.end();
  console.log('User and Attribute tables dropped successfully');
  process.exit(0);
};

dropTables();
