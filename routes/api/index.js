// Express Router
const express = require('express');
const router = express.Router();

// Set Router for V0 version of the API
router.use('/v0', require('./v0'));

module.exports = router;