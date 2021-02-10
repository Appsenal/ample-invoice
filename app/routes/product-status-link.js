const express = require('express');
const router = express.Router();
const productStatusLink = require("../controllers/product-status-link-controller");

// Add a new product status link
router.post("/", productStatusLink.Create); 

// Retrieve all product status links
router.get("/", productStatusLink.GetAll);
  
// Retrieve a single product status link with product status link Id
router.get("/id/:productStatusLinkId", productStatusLink.GetById);

// Retrieve a product status link by product Id
router.get("/product-id/:productId", productStatusLink.GetByProductId);

// Retrieve a single product with product Name
router.get("/product-name/:productName", productStatusLink.GetByProductName);

// Retrieve a product status link by product status Id
router.get("/product-status-id/:productStatusId", productStatusLink.GetByProductStatusId);

// Retrieve a product status link with product status name
router.get("/product-status-name/:productStatusName", productStatusLink.GetByProductStatusName);

// Update a product status link with product status link Id
router.put("/:productStatusLinkId", productStatusLink.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;