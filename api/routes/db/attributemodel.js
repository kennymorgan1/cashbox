const sql = require('../db');

let Attribute = function(attribute) {
  this.attribute = attribute.attribute;
};

Attribute.createAttribute = function (newAttribute) {
  try {
    const { attribute } = newAttribute;

    const query = `
    INSERT INTO Attributes(attribute)
    VALUES ('${attribute}')
    RETURNING *
    `;

    const res = sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

Attribute.getAllAttributes = function() {
  try {
    const res = sql.query = `
    SELECT * FROM Attributes
    `;
    return res;
  } catch (error) {
    return error;
  }
}

Attribute.updateAttribute = function (updateAttribute) {
  try {
    const { attribute, id } = updateAttribute;
    const query = `
    Update Attributes SET attribute = ${attribute}
    WHERE id = ${Number(id)}
    `;
    const res = sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

Attribute.deleteAttribute = function (id) {
  try {
    const query = `
    DELETE from Attributes WHERE id = ${Number(id)}
    RETURNING id
    `;
    const res = sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

module.exports = Attribute;
