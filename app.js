const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./app/routes/index');
const clientRouter = require('./app/routes/client');
const countryRouter = require('./app/routes/country');
const provinceRouter = require('./app/routes/province');
const cityRouter = require('./app/routes/city');
const contactTypeRouter = require('./app/routes/contact_type');
const clientContactRouter = require('./app/routes/client-contact');
const productStatusRouter = require('./app/routes/product-status');
const productParentRouter = require('./app/routes/product-parent');
const clientAddressRouter = require('./app/routes/client-address');
const productRouter = require('./app/routes/product');
const productStatusLinkRouter = require('./app/routes/product-status-link');
const invoiceRouter = require('./app/routes/invoice');
const invoiceProductRouter = require('./app/routes/invoice-product');

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
app.use('/client-contacts', clientContactRouter);
app.use('/product-status', productStatusRouter);
app.use('/product-parents', productParentRouter);
app.use('/client-address', clientAddressRouter);
app.use('/products', productRouter);
app.use('/product-status-links', productStatusLinkRouter);
app.use('/invoices', invoiceRouter);
app.use('/invoice-products', invoiceProductRouter);

module.exports = app;
