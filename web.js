var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.sendfile('/home/ubuntu/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
