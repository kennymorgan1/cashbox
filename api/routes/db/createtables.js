import dotenv from 'dotenv';
import sql from './db';
import { userTable, attributeTable } from './tables'

dotenv.config();

const createTables = async () => {

  await sql.query(userTable);
  await sql.querry(attributeTable);
  await sql.end();
  console.log('User and Attribute tables created successfully');
  process.exit(0);
};

createTables();
