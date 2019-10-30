exports.userTable = `
  CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    first_name varchar(255),
    surname varchar(255),
    date_of_birth date,
    user_ref varchar(255),
    created_at date
  )`;

exports.attributeTable = `
CREATE TABLE IF NOT EXISTS Attributes (
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES Users (id)
)`;
