// Require dependencies
var express = require('express');

// Server setup variables
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/'));

// Listen on port 3000
app.listen(PORT, function() {
    console.log('App running on port ' + PORT);
});

// Require the routes set in burger_controller.js
require('./controllers/apps_controller.js')(app);