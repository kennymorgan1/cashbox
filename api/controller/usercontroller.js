const User = require('../model/usermodel');
const {Response} = require('../helpers/response');

exports.createUser = async (req, res) => {
  const userObj = req.body;

  const user = await User.createUser(userObj);

  if (!user) {
    return Response(res, 'User added successfully', 500, { error: 'internal server error'})
  }

  return Response(res, 'User added successfully', 201, user)
}

exports.listUsers = function(req, res) {
  User.getAllUsers(function(err, user) {
    if (err) {
      Response(res, err.message, 400, err )
    } else {
      Response(res, 'Success', 200, user)
    }
  });
}

exports.updateUser = function(req, res) {
  const userObj = req.body;
  const id = req.params.id;
  User.updateUser((userObj, id), function(err, user) {
    if (err) {
      Response(res, err.message, 400, err )
    } else {
      Response(res, 'Sucess', 200, user)
    }
  });
}

exports.deleteUser = function(req, res) {
  const id = req.params.id;
  User.deleteUser(id, function(err, user) {
    if (err) {
      Response(res, err.message, 400, err )
    } else {
      Response(res, 'Sucess', 200, user)
    }
  });
}
