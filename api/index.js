'use strict'


var mongoose = require('mongoose');     // Modulo intermediario para trabajar con mongodb
var app = require('./app');
var config = require('./config');
var port = process.env.PORT || config.portApp;
var http = require('http');
var socketIO = require('socket.io');


mongoose.Promise = global.Promise; // Elimina mensajes de mongoose al ejecutar el servidor

// Conexion a la bd
mongoose.connect('mongodb://'+ config.ipdb + ':' + config.portdb + '/hackaton', {useNewUrlParser: true},(err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("la conexión con la base de datos está funcionando correctamente");
        const server = http.createServer(app);
        app.set('io', socketIO);
        server.listen(port);
        console.log("Servidor del API Rest escuchando en el puerto: " + config.portApp);
    }
});
