import dotenv from 'dotenv';
import sql from './db';
import { UserTable, attributeTable } from './tables'

dotenv.config();

const createTables = async () => {

  await sql.query(UserTable);
  await sql.querry(attributeTable);
  await sql.end();
  console.log('User and Attribute tables created successfully');
  process.exit(0);
};

createTables();
