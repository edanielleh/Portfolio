'use strict'; 
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

//logging middleware
app.use(morgan); 
//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//our routes HAVE to be included here

app.use('/', require('./routes/main.js')); 


// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;