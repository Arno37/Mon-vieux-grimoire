/* eslint-disable eol-last */
/* eslint-disable func-call-spacing */
/* eslint-disable indent */
/* eslint-disable no-spaced-func */
/* eslint-disable import/order */
const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books');
const userRoutes = require ('./routes/user');
const path = require('path');
const helmet = require('helmet')
require('dotenv').config({ path: '.env.dist' });


const app = express();
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(express.json());
    app.use('/api/books', booksRoutes);
    app.use('/api/auth', userRoutes);
    app.use('/pictures', express.static(path.join(__dirname, 'pictures')));

    app.use(helmet());

module.exports = app;