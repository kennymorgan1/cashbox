const dotenv = require('dotenv');
const {Client} = require('pg');
const { userTable, attributeTable } = require('./tables');

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});


const createTables = async () => {
  client.connect()

  await client.query(userTable);
  await client.query(attributeTable);
  await client.end();
  console.log('User and Attribute tables created successfully');
  process.exit(0);
};

createTables();
