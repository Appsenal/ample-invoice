const ProductParent = require("../models/product-parent-model");

/* Add new product parent. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a product parent
    const productParent = new ProductParent({
        name: req.body.product_parent_name,
        description: req.body.product_parent_desc
    });
    
    try {
        res.json(await ProductParent.Insert(productParent));
        console.log("Adding new product parent "+productParent.name);
    } catch (err) {
        console.error('Error while adding the product parent ', err.message);
        res.json({message: "Failed: Error while adding the product parent"});
        next(err);
    }
};

/* GET all the product parent. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await ProductParent.SelectAll());
    } catch (err) {
        console.error('Error while getting the product parent', err.message);
        res.json({message: "Failed: Error while getting the product parent. "+err.message});
        next(err);
    }
};

// Find a product parent with a product parent id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await ProductParent.SelectById(req.params.productParentId));
    } catch (err) {
        console.error('Error while getting the product status with product parent id '+req.params.productParentId, err.message);
        res.json({message: "Failed: Error while getting the product status with product parent id "+req.params.productParentId});
        next(err);
    }
};

// Find a product parent with a product parent id
exports.GetByName = async function(req, res, next) {
    try {
        res.json(await ProductParent.SelectByName(req.params.productParentName));
    } catch (err) {
        console.error('Error while getting the product status with product parent name '+req.params.productParentName, err.message);
        res.json({message: "Failed: Error while getting the product status with product parent name "+req.params.productParentName});
        next(err);
    }
};

// Update a product parent identified by the product parent Id in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Get a city values
    const productParent = new ProductParent({
        name: req.body.product_parent_name,
        description: req.body.product_parent_desc
    });
    
    try {
        res.json(await ProductParent.UpdateById(req.params.productParentId, productParent));
        console.log("Updated product parent id "+req.params.productParentId);
    } catch (err) {
        console.error('Error while updating the product parent with product parent id '+req.params.productParentId, err.message);
        res.json({message: "Failed: Error while updating the product parent with product parent id "+req.params.productParentId});
        next(err);
    }
};