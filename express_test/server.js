var express = require('express')
var request = require('request')
var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });


// app.get('/', function (req, res) {
//   res.send('wut wut');
// })/


app.get('/spring', function (req, res) {
	request('http://rest-service.guides.spring.io/greeting', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body)
    		res.send(body);
  		}
	})
});

app.get('/bummoner/:id', function (req, res) {
  console.log(req.params.id);
  // var summ = 'biffwidefelo';
  var summ = req.params.id;
  request('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summ + '?api_key=33ddb3c0-b554-4c7e-a274-fbf483eb2afb', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(body);
      }
  })
});

app.get('/summoner', function (req, res) {
  var summ = 'biffwidefelo';
  request('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + 'biffwidefelo' + '?api_key=33ddb3c0-b554-4c7e-a274-fbf483eb2afb', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(body);
      }
  })
});

app.get('*', function (req, res) {
  res.sendFile('./public/index.html', {"root": __dirname}); // load our public/index.html file
  // res.send('test');
});


// http://rest-service.guides.spring.io/greeting

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})