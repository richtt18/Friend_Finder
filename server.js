//depend on
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express server set up
var app = express(),
var PORT = process.env.PORT || 3000;

//body parser set up
app.use(bodyParser.urlencoded({ extended: true }));

//routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
