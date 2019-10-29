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

    const res = await sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

Attribute.getAllAttributes = async() => {
  try {
    const query =  `
    DESCRIBE Attributes
    `;
    const res = await sql.query(query);
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
    const res = await sql.query(query);

    return res;
  } catch(error) {
    return error;
  }
}

Attribute.deleteAttribute = async (deleteAttribute) => {
  try {
    const { attribute } = deleteAttribute

    const query = `
    ALTER TABLE Attributes
    DROP COLUMN ${attribute}
    `;
    const res = await sql.query(query);
    return res;
  } catch(error) {
    return error;
  }
}

module.exports = Attribute;
