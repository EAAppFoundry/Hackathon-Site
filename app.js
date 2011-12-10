var express = require('express');
var logger = require('./ealogger');

var app = module.exports = express.createServer();

// config shit
var pub = __dirname + '/public';

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.compiler({src: pub, enable: ['sass'] }));
	app.use(express.static(pub));
	app.use(app.router);
});

// env config
app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

//
//-------Routes go here ----

app.get('/loggly', function(req, res){
	logger.log('info', 'localhost', 'Rendering loggly.jade');

	res.render('loggly.jade', {layout: true,
		locals: {
			title: 'Loggly'
		}}
	);
});

app.get('/apollo', function(req, res){
	logger.log('info', 'localhost', 'Rendering apollo.jade');

	res.render('apollo.jade', {layout: true,
		locals: {
			title: 'Apollo'
		}}
	);
});

app.get('/infinity', function(req, res){
	logger.log('info', 'localhost', 'Rendering infinity.jade');

	res.render('infinity.jade', {layout: true,
		locals: {
			title: 'Infinity'
		}}
	);
});


app.get('/', function(req, res){
	logger.log('info', 'localhost', 'Rendering index.jade');

	res.render('index.jade',{layout: true,
		locals: {
			title: 'Hackathon'
		}}
	);
});

// ------end routes------

var port = process.env.PORT || 3000;
if(!module.parent){
	app.listen(port);
	console.log("Express server listenting on port %d",app.address().port);
};
