var express = require('express');

var app = express.createServer(express.logger());

var outfile = function(err, contents){
    console.log(contents);
}
var ms= fs.readFile('index.html', outfile);

app.get('/', function(request, response) {


  response.send(ms);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
