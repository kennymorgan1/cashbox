const sql = require('../db');

let User = function(user) {
  this.first_name = user.first_name;
  this.surname = user.surname;
  this.date_of_birth = user.date_of_birth;
  this.age = user.age;
  this.attribute = user.attribute;
  this.created_at = new Date();
};

User.createUser = function (newUser) {
  try {
    const { first_name, surname, date_of_birth, age, attribute } = newUser;

    const query = `
    INSERT INTO Users(first_name, surname, date_of_birth, age, attribute)
    VALUES ('${first_name}', '${surname}', '${date_of_birth}', '${age}', '${attribute}')
    RETURNING *
    `;

    const res = sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

User.getAllUsers = function() {
  try {
    const res = sql.query = `
    SELECT * FROM Users
    `;
    return res;
  } catch (error) {
    return error;
  }
}

User.updateUser = function (updateUser) {
  try {
    const { first_name, surname, date_of_birth, age, attribute, id } = updateUser;
    const query = `
    Update Users SET first_name = ${first_name}, surname = ${surname}, date_of_birth = ${date_of_birth}, age = ${age}, attribute = ${attribute}
    WHERE id = ${Number(id)}
    `;
    const res = sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

User.deleteUser = function (id) {
  try {
    const query = `
    DELETE from Users WHERE id = ${Number(id)}
    RETURNING id
    `;
    const res = sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

module.exports = User;
