const User = require('../model/usermodel');
const {Response} = require('../helpers/response');

exports.createUser = async (req, res) => {
  const userObj = req.body;

  const user = await User.createUser(userObj);

  if (user.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'User added successfully', 201, user)
}

exports.addUserAttribute = async (req, res) => {
  const attrObj = req.body;
  const id = req.params.id;

  const user = await User.addAttribute(attrObj, id);
  console.log('this is response', user);


  if (user.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'User attribute updated successfully', 200, user)
}

exports.listUsers = async (req, res) => {

  const user = await User.getAllUsers();

  if(user.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'Success', 200, user)
}

exports.updateUser = async (req, res) => {
  const userObj = req.body;
  const id = req.params.id;

  const user = await User.updateUser(userObj, id);
  if (user.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'User Updated successfully', 200, user)
}

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  const user = await User.deleteUser(id);
  if (user.name == 'error') {
    return Response(res, 'An Error Ocured', 500, { error: 'internal server error'})
  }

  return Response(res, 'User deleted successfully', 200, user)
}
