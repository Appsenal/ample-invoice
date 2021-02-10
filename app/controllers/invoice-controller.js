const Invoice = require("../models/invoice-model");

/* Add new invoice. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)

    const paymentDate = req.body.payment_date === undefined ? null : req.body.payment_date;
    const invoiceDiscount = req.body.invoice_discount === undefined ? 0 : req.body.invoice_discount; 

    // Add a invoice
    const invoice = new Invoice({
        clientId: req.body.client_id,
        invoiceDate: req.body.invoice_date,
        paymentDate: paymentDate,
        invoiceDiscount: invoiceDiscount 
    });
    
    try {
        res.json(await Invoice.Insert(invoice));
        console.log("Added new invoice");
    } catch (err) {
        console.error('Error while adding the invoice ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the invoice. "});
        next(err);
    }
};

/* GET all the invoice. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await Invoice.SelectAll());
    } catch (err) {
        console.error('Error while getting the invoices', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoices. "+err.message});
        next(err);
    }
};

// Get the invoice by invoice Id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await Invoice.SelectById(req.params.invoiceId));
    } catch (err) {
        console.error('Error while getting the invoice with invoice id '+req.params.invoiceId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice with invoice id "+req.params.invoiceId});
        next(err);
    }
};

// Get the invoice by client Id
exports.GetByClientId = async function(req, res, next) {
    try {
        res.json(await Invoice.SelectByClientId(req.params.clientId));
    } catch (err) {
        console.error('Error while getting the invoice with client id '+req.params.clientId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice with client id "+req.params.clientId});
        next(err);
    }
};

// Get the invoice by client Name
exports.GetByClientName = async function(req, res, next) {
    try {
        res.json(await Invoice.SelectByClientName(req.params.clientName));
    } catch (err) {
        console.error('Error while getting the invoice with client name '+req.params.clientName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice with client name "+req.params.clientName});
        next(err);
    }
};

// Get the invoice by invoice date
exports.GetByInvoiceDate = async function(req, res, next) {
    try {
        res.json(await Invoice.SelectByInvoiceDate(req.params.invoiceDate));
    } catch (err) {
        console.error('Error while getting the invoice with invoice date '+req.params.invoiceDate, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice with invoice date "+req.params.invoiceDate});
        next(err);
    }
};

// Get the invoice by payment date
exports.GetByPaymentDate = async function(req, res, next) {
    try {
        res.json(await Invoice.SelectByPaymentDate(req.params.paymentDate));
    } catch (err) {
        console.error('Error while getting the invoice with payment date '+req.params.paymentDate, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice with payment date "+req.params.paymentDate});
        next(err);
    }
};

// Update a invoice identified by the invoice Id in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    const paymentDate = req.body.payment_date === undefined ? null : req.body.payment_date;
    const invoiceDiscount = req.body.invoice_discount === undefined ? 0 : req.body.invoice_discount; 

    // setup a invoice
    const invoice = new Invoice({
        clientId: req.body.client_id,
        invoiceDate: req.body.invoice_date,
        paymentDate: paymentDate,
        invoiceDiscount: invoiceDiscount 
    });
    
    try {
        res.json(await Invoice.UpdateById(req.params.invoiceId, invoice));
        console.log("Updated invoice id "+req.params.invoiceId);
    } catch (err) {
        console.error('Error while updating the invoice with invoice id '+req.params.invoiceId, err.message);
        res.json({return_code: 1, message: "Failed: Error while updating the invoice with invoice id "+req.params.invoiceId});
        next(err);
    }
};