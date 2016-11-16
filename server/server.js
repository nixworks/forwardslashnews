// main application (create server, etc)
const express = require('express');
const lib = require('./lib');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
dotenv.load({ path: '.env' });
// The application code
app.use('/', lib);

// setup the app middlware
require('./middleware')(app);

// 404 catch-all handler (middleware)
app.use((req, res, next) => {
  res.status(404);
  res.render('404');
});

// 500 error handler (middleware)
app.use((err, req, res, next) => {
  res.status(500);
  res.render('500');
});

module.exports = app;
