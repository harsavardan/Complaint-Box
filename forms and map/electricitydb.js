var http = require('http');
var querystring = require('querystring');
var db = require("mongojs")("eldb");
var qs;
if (db) {
    console.log("Connected!!!");
} else {
    console.log("Error!!!");
}
http.createServer(function(req, res) {
    var data1 = '';
    req.on('data', function(chunk) {
        data1 += chunk;
    });
    req.on('end', function() {
        qs = querystring.parse(data1);
        console.log(qs);
        d1 = qs['g1'];
        d2 = qs['g2'];
        d3 = qs['g3'];
        d4 = qs['g4'];
        d5 = qs['g5'];
        d6 = qs['g6'];
        d7 = qs['problem'];
        if (d7 == "No Power Supply") {
            d8 = qs['power'];
        } else if (d7 == "Generic Complaints") {
            d8 = qs['generic'];
        } else if (d7 == "Line Related") {
            d8 = qs['line'];
        } else if (d7 == "Pole Related") {
            d8 = qs['pole'];
        } else if (d7 == "Transformer Related") {
            d8 = qs['trans'];
        }
        d9 = qs['comments'];
        res.write("Name : " + d1 + ", \nEmail : " + d2 + ", \nPhone Number : " + d3 + ", \nAddress : " + d4 + ", \nDistrict : " + d5 + ",\nPincode : " + d6 + ",\nComplaint Category is : " + d7 + "\nComplaint is :" + d8 + ",\nComments : " + d9);
        res.end();

        if (d7 != "Choose your Problem" && d1 != null && d2 != null && d3 != null && d4 != null && d5 != null && d6 != null && d7 != null && d8 != null && d9 != null) {
            db.elcm.insert({ "name": d1, "email": d2, "phno": d3, "address": d4, "district": d5, "pincode": d6, "problem category": d7, "problem": d8, "comments": d9 });
        }
    });

}).listen(7780);

console.log("Server started Successfully");