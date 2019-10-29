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

exports.deleteAttribute = function(req, res) {
  const id = req.params.id;
  Attribute.deleteAttribute(id, function(err, column) {
    if (err) {
      Response(res, err.message, 400, err )
    } else {
      Response(res, 'Sucess', 200, column)
    }
  });
}
