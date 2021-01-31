const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./app/routes/index');
//const worldRouter = require('./routes/world');
const clientRouter = require('./app/routes/client');
const countryRouter = require('./app/routes/country');
const provinceRouter = require('./app/routes/province');
const cityRouter = require('./app/routes/city');
const contactTypeRouter = require('./app/routes/contact_type');
const clientContact = require('./app/routes/client-contact');

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
app.use('/provinces', provinceRouter);
app.use('/cities', cityRouter);
app.use('/contact-types', contactTypeRouter);
app.use('/client-contacts', clientContact);

module.exports = app;
