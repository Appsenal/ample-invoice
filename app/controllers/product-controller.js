const Product = require("../models/product-model");

/* Add new product. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)

    const productDesc = req.body.product_description === undefined ? "" : req.body.product_description; 

    // Add a product
    const product = new Product({
        productParentId: req.body.product_parent_id,
        price: req.body.price,
        productName: req.body.product_name,
        productDescription: productDesc,
        productCreateDate: req.body.product_create_date
    });
    
    try {
        res.json(await Product.Insert(product));
        console.log("Added new product");
    } catch (err) {
        console.error('Error while adding the product ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the product. Make sure that the product name is not duplicate. "});
        next(err);
    }
};

/* GET all the product. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await Product.SelectAll());
    } catch (err) {
        console.error('Error while getting the product', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product. "+err.message});
        next(err);
    }
};

// Get the product by product Id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await Product.SelectById(req.params.productId));
    } catch (err) {
        console.error('Error while getting the product with product id '+req.params.productId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product with product id "+req.params.productId});
        next(err);
    }
};

// Get the product by product name
exports.GetByName = async function(req, res, next) {
    try {
        res.json(await Product.SelectByName(req.params.productName));
    } catch (err) {
        console.error('Error while getting the product with product name '+req.params.productName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product with product name "+req.params.productName});
        next(err);
    }
};

// Get the product by product name
exports.GetByParentId = async function(req, res, next) {
    try {
        res.json(await Product.SelectByParentId(req.params.productParentId));
    } catch (err) {
        console.error('Error while getting the product with product parent id '+req.params.productParentId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product with product parent id "+req.params.productParentId});
        next(err);
    }
};

// Get the product by product parent name
exports.GetByParentName = async function(req, res, next) {
    try {
        res.json(await Product.SelectByParentName(req.params.productParentName));
    } catch (err) {
        console.error('Error while getting the product with product parent name '+req.params.productParentName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the product with product parent name "+req.params.productParentName});
        next(err);
    }
};

// Update a client address identified by the client addtess Id in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    const productDesc = req.body.product_description === undefined ? "" : req.body.product_description;

    // Add a product
    const product = new Product({
        productParentId: req.body.product_parent_id,
        price: req.body.price,
        productName: req.body.product_name,
        productDescription: productDesc,
        productCreateDate: req.body.product_create_date
    });
    
    try {
        res.json(await Product.UpdateById(req.params.productId, product));
        console.log("Updated product id "+req.params.productId);
    } catch (err) {
        console.error('Error while updating the product with product id '+req.params.productId, err.message);
        res.json({message: "Failed: Error while updating the product with product id "+req.params.productId});
        next(err);
    }
};