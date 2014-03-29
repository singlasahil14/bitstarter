var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var buf = fs.readFile('/home/ubuntu/bitstarter/index.html','utf8',function (err,data) {
  console.log(data);
});

var str = buf.toString();

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
