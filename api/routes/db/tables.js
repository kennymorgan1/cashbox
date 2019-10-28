export const userTable = `
  CREATE TABLE IF NOT EXIST Users (
    id SERIAL PRIMARY KEY,
    first_name varchar(255),
    surname varchar(255),
    date_of_birth date,
    age int,
    attribute varchar(255) ARRAY,
    created_at date
  )`;

export const attributeTable = `
CREATE TABLE IF NOT EXIST Attributes (
  id SERIAL PRIMARY KEY,
  attribute varchar(255)
)`;
