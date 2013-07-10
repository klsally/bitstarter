var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(256);
buffer = fs.readFileSync("index.html");

var bufStr = buffer.toString();

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
