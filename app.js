var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public')); // static files

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('cross road game listening on port 5000!');
});