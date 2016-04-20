var express = require('express');
var app = express();
var request = require('request');
var util = require('util');

var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');

var port 			= process.env.PORT || 5000; 

//Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 								//Simulate DELETE/PUT requests

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.route('/')
	.get(function(req, res){
		res.sendFile(__dirname + '/public/index.html');
	})

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});