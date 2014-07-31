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

app.get('/rolldice/:num', function(req, res){
  var num = req.params.num * 1;
  var rolls = [];
  var sum = 0;

  for(var i = 0; i < num; i++){
    var roll = Math.floor(Math.random() * 6) + 1;
    rolls.push(roll);
    sum += roll;
  }

  res.render('dice', {rolls:rolls, sum:sum});
});

var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is listening on PORT:', port);
});
