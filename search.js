var http = require('http');
var querystring = require('querystring');
var qs;

http.createServer(function(req, res) {
    var data1 = '';
    req.on('data', function(chunk) {
        data1 += chunk;
    });

    req.on('end', function() {
        qs = querystring.parse(data1);
        city = ['city'];
        res.write("CITY: " + city);
    });
}).listen(7781);
console.log("Server Started Successfuly");