var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/local'

mongoose.connect(dbURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connencted', function(){
	console.log('mongoose connection open to ' + dbURI);
});