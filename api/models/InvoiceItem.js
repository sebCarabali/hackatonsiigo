'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Modelo de base de datos
var InvoiceItemSchema = Schema({
     name: String,
     quantity: Number,
     itemValue: Number,
     unitValue: Number,
     product: { type: Schema.ObjectId, ref: 'Product' },
     invoice: { type: Schema.ObjectId, ref: 'Invoice' },
     tenant: { type: Schema.ObjectId, ref: 'Tenant' },
});

module.exports = mongoose.model('InvoiceItem', productSchema);