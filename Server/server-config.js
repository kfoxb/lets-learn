let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let mongoose = require('mongoose');
let Images = require('../app/models/img');
let db = require('../db/config.js');

let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../assets'));
app.use(morgan('dev'));

app.get('/api/img', (req, res) => {
  Images.find().then((images) => { 
    res.json(images); 
  });
});

app.get('*', function(req, res) {
  res.sendFile('./public/index.html');
});

module.exports = app;