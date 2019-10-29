exports.userTable = `
  CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    first_name varchar(255),
    surname varchar(255),
    date_of_birth date,
    created_at date
  )`;

exports.attributeTable = `
CREATE TABLE IF NOT EXISTS Attributes (
  id SERIAL PRIMARY KEY,
  attribute varchar(255)
)`;
