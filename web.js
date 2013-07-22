var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
   var content = fs.readFileSync('index.html');
   //var buffer = new buffer ();
   //content.toString("utf-8");
   content.toString("utf-8", 0, 256);
   
   response.send(content)});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
