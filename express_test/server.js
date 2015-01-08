var express = require('express')
var request = require('request')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/spring', function (req, res) {
	request('http://rest-service.guides.spring.io/greeting', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body)
    		res.send(body);
  		}
	})
});

// http://rest-service.guides.spring.io/greeting

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})