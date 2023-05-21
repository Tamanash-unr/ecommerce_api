const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

// Parsing POST requests
app.use(express.urlencoded());

// Use Express Router
app.use('/', require('./routes'))

// Start the server
app.listen(port, function(err){
    if(err){
        console.log(`Error Connecting to Server : ${err}`);
    }

    console.log(`Server is running on port ${port}`);
});