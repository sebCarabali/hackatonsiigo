'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Modelo de base de datos
var ProductSchema = Schema({
     name: String,
     description: String,
     listPrice: Number,
     tenant: { type: Schema.ObjectId, ref: 'Tenat' }
});


module.exports = mongoose.model('Product', ProductSchema);
