const express = require('express');
const router = express.Router();
const ProductStatus = require("../controllers/product-status-controller");

// Add a new product status
router.post("/", ProductStatus.Create);

// Retrieve all product statuses
router.get("/", ProductStatus.GetAll);
  
// Retrieve a single product status with product status Id
router.get("/id/:productStatusId", ProductStatus.GetById);

// Retrieve a single product status with product status Name
router.get("/name/:productStatusName", ProductStatus.GetByName);

// Update a product status with product status Id
router.put("/:productStatusId", ProductStatus.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;