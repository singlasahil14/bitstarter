var fs = require('fs'); 
var express = require('express');
var app = express();
app.use(express.logger());

var data = fs.readFileSync('/Users/ubuntu@ip-172-31-11-6/bitstarter/index.html');
app.get('/', function(request, response) {
  response.send('Hello world 2');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
