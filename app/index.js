'use strict';

var express = require('express');
var morgan = require('morgan');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));
app.use(morgan('dev'));

app.get('/', function(req, res){ 
  res.render('index');
});

app.get('/rolldice/:dice', function(req, res){
  var roll = req.params.dice * 1;
  var row = Math.ceil(roll / 10);
  var rolls = [];

  for(var i = 0; i < roll; i++){
    rolls.push(Math.floor(Math.random() * 20) + 1);
  }
  var sum = rolls.reduce(function(a, b) {return a + b;});
  res.render('rolldice', {rolls:rolls, row:row, sum:sum});
});

var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is listening on PORT:', port);
});
