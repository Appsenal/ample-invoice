const express = require('express');
const router = express.Router();
const product = require("../controllers/product-controller");

// Add a new product
router.post("/", product.Create); 

// Retrieve all products
router.get("/", product.GetAll);
  
// Retrieve a single product with product Id
router.get("/id/:productId", product.GetById);

// Retrieve a single product with product Name
router.get("/name/:productName", product.GetByName);

// Retrieve a product with product parent Id
router.get("/parent-id/:productParentId", product.GetByParentId);

// Retrieve a product with product parent name
router.get("/parent-name/:productParentName", product.GetByParentName);

// Update a product with product Id
router.put("/:productId", product.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;