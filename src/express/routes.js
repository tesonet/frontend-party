var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


// Static files
app.use(express.static(path.join(__dirname, 'public/static/')));

// For autoparsing json in POST body
app.use(bodyParser.urlencoded({extended: false, limit: '50mb', parameterLimit: 1000000}));
app.use(bodyParser.json());

app.get('*', function (req, res) {
    res.redirect('/');
});

module.exports = function(){
    return app;
}