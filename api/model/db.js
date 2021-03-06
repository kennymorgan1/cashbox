const dotenv = require('dotenv');
const {Client} = require('pg');

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect().then(() => console.log('connected')).catch(err => console.log(err));

module.exports = client;
