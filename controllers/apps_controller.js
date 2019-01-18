// Require dependencies
var express = require('express');

// Export controller defined routes
module.exports = function(app) {
    app.get('/', function(req, res) {
        // Shit it up!
        res.sendFile(path.join(__dirname, '../home.html'));
    });
};