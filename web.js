var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var buf = fs.readFileSync('/home/ubuntu/bitstarter/index.html');

var str = buf.toString('utf-8');

console.log(str);

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
