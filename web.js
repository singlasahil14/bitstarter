var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var buf = fs.readFile('/home/ubuntu/bitstarter/index.html',function (err,data) {
  if (err) throw err;
  console.log(data);
});

app.get('/', function(request, response) {
  response.send('Hello world 2');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
