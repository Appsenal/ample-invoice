const ProductStatus = require("../models/product-status-model");

/* Add new contact type. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a product status
    const productStatus = new ProductStatus({
        name: req.body.product_status_name,
        description: req.body.product_status_desc
    });
    
    try {
        res.json(await ProductStatus.Insert(productStatus));
        console.log("Adding new product status "+productStatus.name);
    } catch (err) {
        console.error('Error while adding the product status ', err.message);
        res.json({message: "Failed: Error while adding the product status"});
        next(err);
    }
};

/* GET all the product status. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await ProductStatus.SelectAll());
    } catch (err) {
        console.error('Error while getting the product status', err.message);
        res.json({message: "Failed: Error while getting the product status. "+err.message});
        next(err);
    }
};

// Find a contact type with a product status id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await ProductStatus.SelectById(req.params.productStatusId));
    } catch (err) {
        console.error('Error while getting the product status with product status id '+req.params.productStatusId, err.message);
        res.json({message: "Failed: Error while getting the product status with product status id "+req.params.productStatusId});
        next(err);
    }
};

// Find a contact type with a product status id
exports.GetByName = async function(req, res, next) {
    try {
        res.json(await ProductStatus.SelectByName(req.params.productStatusName));
    } catch (err) {
        console.error('Error while getting the product status with product status name '+req.params.productStatusName, err.message);
        res.json({message: "Failed: Error while getting the product status with product status name "+req.params.productStatusName});
        next(err);
    }
};

// Update a country identified by the countryId in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Get a city values
    const productStatus = new ProductStatus({
        name: req.body.product_status_name,
        description: req.body.product_status_desc
    });
    
    try {
        res.json(await ProductStatus.UpdateById(req.params.productStatusId, productStatus));
        console.log("Updated product status id "+req.params.productStatusId);
    } catch (err) {
        console.error('Error while updating the product status with product status id '+req.params.productStatusId, err.message);
        res.json({message: "Failed: Error while updating the product status with product status id "+req.params.productStatusId});
        next(err);
    }
};