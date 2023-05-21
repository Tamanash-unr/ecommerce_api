const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// Setup for accessing Static Files
app.use(express.static('./public'));

// Parsing POST requests
app.use(express.urlencoded());

// Setup Express Layout
app.use(expressLayouts);

// Setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use Express Router
app.use('/', require('./routes'))

// Start the server
app.listen(port, function(err){
    if(err){
        console.log(`Error Connecting to Server : ${err}`);
    }

    console.log(`Server is running on port ${port}`);
});