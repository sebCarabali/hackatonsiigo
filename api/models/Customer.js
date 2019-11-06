
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Modelo de base de datos
var customerSchema = Schema({
     firstName: String,
     lastName: String,
     tenant: { type: Schema.ObjectId, ref: 'Tenant' },
});

module.exports = mongoose.model('Customer', customerSchema);