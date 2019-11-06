'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Modelo de base de datos
var invoiceSchema = Schema({
     docDate: Date,
     docNumber: String,
     customer: { type: Schema.ObjectId, ref: 'Invoice' },
     totalDiscount: Number,
     totalTax: Number,
     totalValue: Number,
});

module.exports = mongoose.model('Invoice', invoiceSchema);  