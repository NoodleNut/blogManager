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
	passport = require('passport'),
	flash = require('connect-flash');


path = require('path');
//for getting img file
multiparty = require('connect-multiparty');
multipartyMiddleware = multiparty();
fs = require('fs');
storage = require('node-persist');

storage.initSync();

var mdb; //for storing db obj and passing it around


// DATABASE CRUMS ======================================

MongoClient.connect(
	'mongodb://dylaila:bluecakes@ds047792.mongolab.com:47792/blogmanager',
	function(err, db)
	{
		if (err) throw err;
		console.log("Connected to Database");

		mdb = db;
		// routes ======================================================================
		require('./app/routes.js')(app, mdb) // load our routes and pass in our app and fully configured passport

	});

app.set('SHHsecret', 'dylanisdracula');

app.use(bodyParser.json()) // get information from html forms
app.use(bodyParser.urlencoded(
{
	extended: true
}));

app.use(express.static(__dirname + '/public'));


app.use(flash());


// launch ======================================================================
app.listen(port, "127.0.0.1")
console.log('The magic happens on port ' + port)