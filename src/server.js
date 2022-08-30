require('dotenv').config();
// susikuriam serveri
const express = require('express');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const morgan = require('morgan');
const dbConfig = require('./config');

const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(morgan('dev'));
// prisidedam morgan/cors
// GET / - msg: server online

app.get('/', (req, res) => {
  res.json({
    msg: 'Server online',
  });
});

// 404 - returns json
app.use((req, res) => {
  res.status(404).json({
    msg: 'Page not found',
  });
});

app.listen(port, () => console.log(`Server online on port ${port}`.bgYellow.bold));
