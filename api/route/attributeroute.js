const express = require('express');
const { createAttribute } = require('../controller/attributecontroller');

const router = express.Router();

router.post('', createAttribute);

module.exports = router;
