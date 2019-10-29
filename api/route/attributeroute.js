const express = require('express');
const { createAttribute, updateAttribute, listAttributes, deleteAttribute } = require('../controller/attributecontroller');

const router = express.Router();

router.post('', createAttribute);

router.put('', updateAttribute);

router.get('', listAttributes);

router.delete('', deleteAttribute);

module.exports = router;
