const sql = require('./db');

let User = function(user) {
  this.first_name = user.first_name;
  this.surname = user.surname;
  this.date_of_birth = user.date_of_birth;
  this.age = user.age;
  this.created_at = new Date();
};

User.createUser = async (newUser) => {
  try {
    const { first_name, surname, date_of_birth } = newUser;
    const currentYear = new Date().getFullYear();

    const birthYear = new Date(date_of_birth).getFullYear();
    console.log(currentYear, birthYear);
    const age = currentYear - birthYear;
    console.log(age);

    const query = `
    INSERT INTO Users(first_name, surname, date_of_birth, age)
    VALUES ('${first_name}', '${surname}', '${date_of_birth}', '${age}')
    RETURNING *
    `;

    console.log(query);

    const res = await sql.query(query)
    console.log(res.rows[0]);

    return res.rows[0];
  } catch(error) {
    console.log('this is an error', error);

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
