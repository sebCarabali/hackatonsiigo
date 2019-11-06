'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Conviersion a JSON de los datos recibidos por peticiones HTTP


// Configuracion de cabeceras http
app.use(function(request, response, next) {
     response.header('Access-Control-Allow-Origin', '*');
     response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Allow-Request-Method');
     response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
     response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
     next();
 });


module.exports = app;