var express = require('express');
var path = require('path');
var nStatic = require('node-static');


var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/map', function(req, res) {
    res.sendFile(path.join(__dirname + '/map.html'));
});


 // viewed at http://localhost:8080
app.listen(8080, () =>
  console.log('Example app listening at http://localhost:8080'),
);
