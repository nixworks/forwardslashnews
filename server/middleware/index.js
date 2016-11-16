const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const session = require('express-session');
const lusca = require('lusca');
const flash = require('express-flash');
const express = require('express');
const exphbs = require('express-handlebars');

// setup global middleware here
module.exports = function (app) {
  // using process.cwd() to hopefully give me the true root (__dirname is not the correct context)
  app.use('/static', express.static(`${process.cwd()}/public`, { maxAge: 86400000 }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // View engine information
  const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    // Specify helpers which are only registered on this instance. 
    helpers: {},
  });
  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
  app.use(compression());
  app.use(flash());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // https://github.com/krakenjs/lusca
  app.use(session({
    secret: 'abc',
    resave: true,
    saveUninitialized: true,
  }));
  app.use(lusca.csrf());
  app.use(lusca.xframe('SAMEORIGIN'));
  app.use(lusca.hsts({ maxAge: 31536000 }));
  app.use(lusca.xssProtection(true));
  app.use(lusca.nosniff());
  app.use(morgan('dev'));
};
