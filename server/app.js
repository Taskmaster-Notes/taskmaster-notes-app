require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

//cors
app.use(cors());
//middleware
app.use(express.urlencoded({extended: false})):
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '../dist')));

//api
app.use('/api', require('./routes/index.js'));

module.exports = app;