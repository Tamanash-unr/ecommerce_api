// Express Router
const express = require('express');
const router = express.Router();

// Set Route for Api's
router.use('/api', require('./api'));

module.exports = router;