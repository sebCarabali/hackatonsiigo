'use strict'

const express = require('express');
const api = express.Router();
const mongoose = require('mongoose');

var Product = require('../models/Product');


api.post('/create-product', (req, res) => {
     const socketIO = req.app.get('io');
     const product = buildFromJSON(req.body);
     product.save().then(() => {
          //socketIO.emit('vamos bn');
          res.status(201).send({ message: "EL producto se creó correctamente" });
     });
});

api.get('/get-all-products', (req, res) => {
     Product.find({}).then((products) => {
          res.status(200).send({ products });
     });
});

api.get('/search-products-name/:text', (req, res) => {
     const exp = RegExp(req.params.text);
     Product.find({ "name": { $regex: exp, $options: 'i' } }).limit(10)
          .sort({ name: -1 })
          .select({ _id: 0, name: 1 })
          .exec(function (err, products) {
               if (err) {
                    res.status(500).send({ error: "Ocurrió un error interno, Intente de nuevo" });
               } else {
                    if (!products) {
                         res.status(404).send({ message: "No se encontraron productos con ese nombre" });
                    } else {
                         res.status(200).send({ products });
                    }
               }
          });
});

/**
 * 
 * function(err, products) {
          if (err) {
               res.status(500).send({ error: "Ocurrió un error interno, Intente de nuevo"});
          } else {
               if (!products) {
                    res.status(404).send({ message: "No se encontraron productos con ese nombre"});
               } else {
                    res.status(200).send({ products });
               }
          }
     }
 */



// Utileria
function buildFromJSON(data) {
     const product = new Product();
     product.name = data.name;
     product.description = data.description;
     product.listPrice = data.listPrice;
     //product.tenant = data.tenant.id || '';
     return product;
}


module.exports = api;