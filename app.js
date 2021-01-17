const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./app/routes/index');
//const worldRouter = require('./routes/world');
const clientRouter = require('./app/routes/client');
const countryRouter = require('./app/routes/country');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/world', worldRouter);
app.use('/clients', clientRouter);
app.use('/countries', countryRouter);

module.exports = app;