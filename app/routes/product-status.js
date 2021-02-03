const express = require('express');
const router = express.Router();
const ProductStatus = require("../controllers/product-status-controller");

// Add a new contact type
router.post("/", ProductStatus.Create);

// Retrieve all contact types
router.get("/", ProductStatus.GetAll);
  
// Retrieve a single contact type with contact type Id
router.get("/id/:productStatusId", ProductStatus.GetById);

// Retrieve a single contact type with contact type Name
router.get("/name/:productStatusName", ProductStatus.GetByName);

// Update a country with countryId
router.put("/:productStatusId", ProductStatus.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;