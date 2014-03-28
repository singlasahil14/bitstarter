var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var data = fs.readFile('/home/ubuntu/bitstarter/index.html',function (err,data) {
  if (err) throw err;
  console.log(data);
});

var buf = data.toString();

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
