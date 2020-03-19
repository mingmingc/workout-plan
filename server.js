var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
});

app.use(express.static("public"));

app.use(bodyParser.json());

//get request
//post request

app.listen(3000, function () {
	console.log('listening on 3000');
});

