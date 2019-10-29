const sql = require('./db');

let Attribute = function(attribute) {
  this.attribute = attribute.attribute;
};

Attribute.createAttribute = async (newAttribute) => {
  try {
    const { attribute } = newAttribute;

    const query = `
    ALTER TABLE Attributes
    ADD COLUMN ${attribute} varchar(255);
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

Attribute.updateAttribute = async (updateAttribute) => {
  try {
    const { attribute, newAttribute } = updateAttribute;
    const query = `
    ALTER TABLE Attributes
    RENAME COLUMN ${attribute} TO ${newAttribute};
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
