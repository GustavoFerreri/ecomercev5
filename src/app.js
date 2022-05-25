'use strict'

// express
const express = require('express');
const app = express();

// Declaramos midleware
const morgan = require('morgan');
const path = require('path');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/products', require('./routes/products'));
app.use('/carts', require('./routes/carts'));
// app.use('/productCreate', (req, res) =>{
//     res.render('newProduct')
// })

app.use(express.static(path.join(__dirname, 'src')));

module.exports = app;