// Express Router
const express = require('express');
const router = express.Router();

// Set Router for Products
router.use('/products', require('./products'));

module.exports = router;