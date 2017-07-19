var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const router = require('./router')

var app = express()

const port = 8082;

app.use(cors());
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true }));
router(app);

app.listen(port);
console.log('Server running on port '+port);
