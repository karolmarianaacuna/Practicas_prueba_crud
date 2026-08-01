const express = require('express');
const { registro } = require('../controllers/controllers.producto');

const router = express.Router();

router.post('/', registro);

module.exports = router;
