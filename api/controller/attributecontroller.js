const Attribute = require('../model/attributemodel');
const {Response} = require('../helpers/response');

exports.createAttribute = async (req, res) => {
  const columnObj = req.body;

  const column = await Attribute.createAttribute(columnObj);

  if (column.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'Attribute added successfully', 201, column)
}

exports.listAttributes = async (req, res) => {

  const column = await Attribute.getAllAttributes();

  if(column.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'Success', 200, column)
}

exports.updateAttribute = async (req, res) => {
  const columnObj = req.body;
  const column = await Attribute.updateAttribute(columnObj);

  if (column.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'Attribute updated successfully', 200, column)
}

exports.deleteAttribute = async (req, res) => {
  const columnObj = req.params.id;
  const column = await Attribute.deleteAttribute(columnObj);

  if (column.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'Attribute deleted successfully', 200, column)
}
