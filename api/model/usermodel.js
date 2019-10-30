const uuid = require('uuid');
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
    let user_id = uuid();
    const query = `
    INSERT INTO Users(first_name, surname, date_of_birth, created_at, user_ref)
    VALUES ('${first_name}', '${surname}', '${date_of_birth}', 'Now()', '${user_id}')
    RETURNING *
    `;
    const res = await sql.query(query)

    return res.rows[0];
  } catch(error) {
    console.log(error);
    return error;
  }
}

User.addAttribute = async (attrData, id) => {
  try {
    const { attribute, value } = attrData;
    const userQuery = `SELECT * FROM Users WHERE user_ref = '${id}'`
    const {rows} = await sql.query(userQuery);
    let user_id = rows[0].id
    const attrQuery = `SELECT * FROM Attributes WHERE user_id = '${user_id}'`;

    const attRes = await sql.query(attrQuery);
    let query;
    if(attRes.rows.length < 1) {
      query = `
      INSERT INTO Attributes(${attribute}, user_id)
      VALUES ('${value}', '${user_id}')
      RETURNING *
      `;
    } else {
      query = `
      Update Attributes SET ${attribute} = '${value}'
      WHERE user_id = ${user_id}
      `;
    }
    const res = await sql.query(query);

    return res.rows[0];
  } catch(error) {
    return error;
  }
}

User.getAllUsers = async () => {
  try {
    const query = `
    SELECT
      date_part('year',age(date_of_birth)) AS age, *
    FROM Users
    LEFT JOIN Attributes ON Users.id = Attributes.user_id
    `;

    const res = await sql.query(query);
    return res.rows;
  } catch (error) {
    return error;
  }
}

User.getOneUser = async (id) => {
  try {
    const query =`
    SELECT
    *
    FROM Esers
    WHERE user_id = ${id}
    `;
    const res = await sql.query(query);
    return res.rows;
  } catch {
    return error;
  }
}

User.updateUser = async (updateUser, id) => {
  try {
    const { first_name, surname, date_of_birth } = updateUser;
    const query = `
    Update Users SET first_name = '${first_name}', surname = '${surname}', date_of_birth = '${date_of_birth}'
    WHERE user_id = ${id}
    RETURNING *
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
    DELETE from Users WHERE user_id = ${id}
    RETURNING id
    `;
    const res = await sql.query(query);
    return res.rows[0];
  } catch(error) {
    return error;
  }
}

module.exports = User;
