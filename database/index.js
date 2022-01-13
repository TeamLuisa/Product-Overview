const express = require('express');
// var controllers = require('./controllers/cows.js')

const path = require('path')

var app = express();

app.use(express.json());
app.set('port', 3000);
app.use(express.static(path.join(__dirname, '../', 'client')));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
};