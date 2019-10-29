const sql = require('./db');

let User = function(user) {
  this.first_name = user.first_name;
  this.surname = user.surname;
  this.date_of_birth = user.date_of_birth;
  this.created_at = user.created_at;
};

User.createUser = async (newUser) => {
  try {
    const { first_name, surname, date_of_birth } = newUser;

    const query = `
    INSERT INTO Users(first_name, surname, date_of_birth, created_at)
    VALUES ('${first_name}', '${surname}', '${date_of_birth}', 'Now()')
    RETURNING *
    `;
    const res = await sql.query(query)

    return res.rows[0];
  } catch(error) {
    return error;
  }
}
User.getAllUsers = async () => {
  try {
    const query = `
    SELECT
      first_name,
      surname,
      date_of_birth,
      date_part('year',age(date_of_birth)) AS age,
      created_at
    FROM Users
    `;

    const res = await sql.query(query);
    return res.rows;
  } catch (error) {
    return error;
  }
}

User.updateUser = async (updateUser) => {
  try {
    const { first_name, surname, date_of_birth, age, attribute, id } = updateUser;
    const query = `
    Update Users SET first_name = ${first_name}, surname = ${surname}, date_of_birth = ${date_of_birth}, age = ${age}, attribute = ${attribute}
    WHERE id = ${Number(id)}
    `;
    const res = await sql.query(query);
    return res.rows[0];
  } catch(error) {
    return error;
  }
}

User.deleteUser = async (id) => {
  try {
    const query = `
    DELETE from Users WHERE id = ${Number(id)}
    RETURNING id
    `;
    const res = await sql.query(query);
    return res.rows[0];
  } catch(error) {
    return error;
  }
}

module.exports = User;
