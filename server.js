// Starting point for node/express server 

// Dependencies
// *****************************************************
// 
var express = require("express");
var bodyParser = require("body-parser");

// Setup for the express application
// *****************************************************
// 
var app = express();
var PORT = process.env.PORT || 8080;

// Require for database models here
// *****************************************************


// Setup express application to handle data parsing middleware
// *****************************************************
// 

app.use(bodyParser.urlencoded({extended: false }));
// parse applicaton/json
app.use(bodyParser.json());

// Static directory when users visit
app.use(express.static("public"));

// Routes
// *****************************************************
// 
// API Routes

// HTML Routes

// Sync database and start the express application
// *****************************************************
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("Application listening on PORT " + PORT);
    });
});

