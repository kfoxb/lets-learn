let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');

let app = express();

app.use(express.static(__dirname + '../public'));
app.use(morgan('dev'));

module.exports = app;