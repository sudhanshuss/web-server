var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication : function (req, res, next){
		console.log('private route hit !');
		next();
	},
	logger : function (req,res,next){
		console.log('Request: '+ new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
	}
};

app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication, function(req,res){
	res.send('About US!');
});

app.use(express.static(__dirname + '/public'));

console.log(__dirname);
app.listen(port,function(){
	console.log('Express Server Started at port : ' + port);
});