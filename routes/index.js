// Express Router
const express = require('express');
const router = express.Router();

// Get Home Controller
const homeController = require('../controller/home_controller');

// Set route for Home
router.get('/', homeController.home);

// Set Route for Api's
router.use('/api', require('./api'));

module.exports = router;