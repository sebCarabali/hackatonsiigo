'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Modelo de base de datos
var tenantSchema = Schema({
     name: String,
});

module.exports = mongoose.model('Tenant', tenantSchema);