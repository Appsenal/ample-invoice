const ProductStatusLink = require("../models/product-status-link-model");

/* Add new product status link. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)

    //const productDesc = req.body.product_description === undefined ? "" : req.body.product_description; 

    // Add a product status link
    const productStatusLink = new ProductStatusLink({
        productId: req.body.product_id,
        productStatusId: req.body.product_status_id,
        effectiveDate: req.body.effective_date
    });
    
    try {
        res.json(await ProductStatusLink.Insert(productStatusLink));
        console.log("Added new product status link");
    } catch (err) {
        console.error('Error while adding the product status link ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the product status link. "});
        next(err);
    }
};

/* GET all the product status link. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await ProductStatusLink.SelectAll());
    } catch (err) {
        console.error('Error while getting the product status link', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product status link. "+err.message});
        next(err);
    }
};

// Get the product status link by product status link Id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await ProductStatusLink.SelectById(req.params.productStatusLinkId));
    } catch (err) {
        console.error('Error while getting the product status link with product status link id '+req.params.productStatusLinkId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product status link with product status link id "+req.params.productStatusLinkId});
        next(err);
    }
};

// Get the product status link by product Id
exports.GetByProductId = async function(req, res, next) {
    try {
        res.json(await ProductStatusLink.SelectByProductId(req.params.productId));
    } catch (err) {
        console.error('Error while getting the product status link with product id '+req.params.productId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product status link with product id "+req.params.productId});
        next(err);
    }
};

// Get the product status link by product Name
exports.GetByProductName = async function(req, res, next) {
    try {
        res.json(await ProductStatusLink.SelectByProductName(req.params.productName));
    } catch (err) {
        console.error('Error while getting the product status link with product name '+req.params.productName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product status link with product name "+req.params.productName});
        next(err);
    }
};

// Get the product status link by product status Id
exports.GetByProductStatusId = async function(req, res, next) {
    try {
        res.json(await ProductStatusLink.SelectByProductStatusId(req.params.productStatusId));
    } catch (err) {
        console.error('Error while getting the product status link with product status id '+req.params.productStatusId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product status link with product status id "+req.params.productStatusId});
        next(err);
    }
};

// Get the product status link by product status Name
exports.GetByProductStatusName = async function(req, res, next) {
    try {
        res.json(await ProductStatusLink.SelectByProductStatusName(req.params.productStatusName));
    } catch (err) {
        console.error('Error while getting the product status link with product status name '+req.params.productStatusName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product status link with product status name "+req.params.productStatusId});
        next(err);
    }
};

// Update a client address identified by the client addtess Id in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    const productDesc = req.body.product_description === undefined ? "" : req.body.product_description;

    // Setup a product status link
    const productStatusLink = new ProductStatusLink({
        productId: req.body.product_id,
        productStatusId: req.body.product_status_id,
        effectiveDate: req.body.effective_date
    });
    
    try {
        res.json(await ProductStatusLink.UpdateById(req.params.productStatusLinkId, productStatusLink));
        console.log("Updated product status link id "+req.params.productStatusLinkId);
    } catch (err) {
        console.error('Error while updating the product status link with product status link id '+req.params.productStatusLinkId, err.message);
        res.json({return_code: 1, message: "Failed: Error while updating the product status link with product status link id "+req.params.productStatusLinkId});
        next(err);
    }
};