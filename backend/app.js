var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const process = require('process');
var cookieParser = require('cookie-parser');


var app = express();
app.use(express.static('../public'))
      .use(cors())
      .use(cookieParser())
      .use(express.json());


//require('./routes')(app);

var port = process.env.PORT || 8888;
app.listen(port);
console.log(`Listening on port: ${port}`);