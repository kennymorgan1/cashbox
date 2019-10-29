const express = require('express');
const {
  createUser,
  listUsers,
  updateUser,
  addUserAttribute,
  deleteUser } = require('../controller/usercontroller');
const { createUserValidation } = require('../validators/uservalidator');

const router = express.Router();

router.post('', createUserValidation, createUser);

router.get('', listUsers);

router.put('/:id', updateUser);

router.put('/attribute/:id', addUserAttribute);

router.delete('/:id', deleteUser);

module.exports = router;
