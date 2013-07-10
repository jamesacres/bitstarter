var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var retval = '';
    var buffer = fs.readFileSync('index.html');
    if (!buffer) {
        retval = 'Failed to read file';
    } else {
        retval = buffer.toString('utf-8');
    }
    response.send(retval);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
