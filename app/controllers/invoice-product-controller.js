const InvoiceProduct = require("../models/invoice-product-model");

/* Add new invoice product. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)

    //const paymentDate = req.body.payment_date === undefined ? null : req.body.payment_date;
    //const invoiceDiscount = req.body.invoice_discount === undefined ? 0 : req.body.invoice_discount; 

    // Add a invoice product
    const invoiceProduct = new InvoiceProduct({
        invoiceId: req.body.invoice_id,
        productId: req.body.product_id,
        quantity: req.body.quantity,
        productDiscount: req.body.product_discount 
    });
    
    try {
        res.json(await InvoiceProduct.Insert(invoiceProduct));
        console.log("Added new invoice product");
    } catch (err) {
        console.error('Error while adding the invoice product ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the invoice product. "});
        next(err);
    }
};

/* GET all the invoice product. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await InvoiceProduct.SelectAll());
    } catch (err) {
        console.error('Error while getting the invoice products', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice products. "+err.message});
        next(err);
    }
};

// Get the invoice product by invoice product Id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await InvoiceProduct.SelectById(req.params.invoiceProductId));
    } catch (err) {
        console.error('Error while getting the invoice product with invoice product id '+req.params.invoiceProductId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice product with invoice product id "+req.params.invoiceProductId});
        next(err);
    }
};

// Get the invoice product by invoice Id
exports.GetByInvoiceId = async function(req, res, next) {
    try {
        res.json(await InvoiceProduct.SelectByInvoiceId(req.params.invoiceId));
    } catch (err) {
        console.error('Error while getting the invoice product with invoice id '+req.params.invoiceId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice product with invoice id "+req.params.invoiceId});
        next(err);
    }
};

// Get the invoice product by invoice Id
exports.GetByProductId = async function(req, res, next) {
    try {
        res.json(await InvoiceProduct.SelectByProductId(req.params.productId));
    } catch (err) {
        console.error('Error while getting the invoice product with product id '+req.params.productId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice product with product id "+req.params.productId});
        next(err);
    }
};

// Get the invoice product by invoice name
exports.GetByProductName = async function(req, res, next) {
    try {
        res.json(await InvoiceProduct.SelectByProductName(req.params.productName));
    } catch (err) {
        console.error('Error while getting the invoice product with product name '+req.params.productName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the invoice product with product name "+req.params.productName});
        next(err);
    }
};

// Update a invoice product identified by the invoice product Id in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    //const paymentDate = req.body.payment_date === undefined ? null : req.body.payment_date;
    const productDiscount = req.body.product_discount === undefined ? 0 : req.body.product_discount; 

    // setup a invoice product
    const invoiceProduct = new InvoiceProduct({
        invoiceId: req.body.invoice_id,
        productId: req.body.product_id,
        quantity: req.body.quantity,
        productDiscount: req.body.product_discount 
    });
    
    try {
        res.json(await InvoiceProduct.UpdateById(req.params.invoiceProductId, invoiceProduct));
        console.log("Updated invoice product id "+req.params.invoiceProductId);
    } catch (err) {
        console.error('Error while updating the invoice product with invoice product id '+req.params.invoiceProductId, err.message);
        res.json({return_code: 1, message: "Failed: Error while updating the invoice product with invoice product id "+req.params.invoiceProductId});
        next(err);
    }
};