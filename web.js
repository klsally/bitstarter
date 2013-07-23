var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync("index.html");

var bufStr = buffer.toString();

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
