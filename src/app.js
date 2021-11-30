const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to data base
mongoose.connect('mongodb://localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'baltaio' }).then(connectedDB=>{
    console.log('>> Banco de dados conectado em: mongodb://localhost:27017/\n');
}).catch(err=>{
    console.error('Ocorreu um erro ao conectar no banco de dados: ', err);
}); 

// Models
const Product = require('../src/models/product');
const Customer = require('../src/models/customer');
const Order = require('../src/models/order');

// Routers imports
const indexRoute = require('./routes/index');
const productsRoute = require('./routes/products');
const customersRoute = require('./routes/customers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/customers', customersRoute);

module.exports = app;