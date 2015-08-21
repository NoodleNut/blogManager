// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    http = require('http'),
    MongoClient = require('mongodb').MongoClient,
    jwt = require('jsonwebtoken'),
    flash = require('connect-flash')


path = require('path');
//for getting img file
multiparty = require('connect-multiparty');
multipartyMiddleware = multiparty();
fs = require('fs');
storage = require('node-persist');

storage.initSync();


// DATABASE CRUMS ======================================

MongoClient.connect('mongodb://usc_admin:admin1@ds031701.mongolab.com:31701/usc_web', function(err, db) {
    if (err) throw err;
    console.log("Connected to Database");
    _db = db //this is our global database object
});

app.set('SHHsecret', 'dylanisdracula');
app.use(bodyParser.json()) // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));


app.use(flash());



// routes ======================================================================
require('./app/routes.js')(app) // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port)