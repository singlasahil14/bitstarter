var fs = require('fs');
var data=fs.readFileSync('~/bitstarter/index.html');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
