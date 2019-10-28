const User = require('../model/usermodel');
const Response = require('../helpers/response');

exports.createUser = function(req, res) {
  const userObj = req.body;
  User.createUser(userObj, function(err, user) {
    if (err) {
      console.log(err);

      Response(res, err.message, 400, err )
    } else {
      console.log(user);

      Response(res, 'User added successfully', 201, user)
    }
  });
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
