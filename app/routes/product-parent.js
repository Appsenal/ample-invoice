const express = require('express');
const router = express.Router();
const ProductParent = require("../controllers/product-parent-controller");

// Add a new product parent
router.post("/", ProductParent.Create);

// Retrieve all product parents
router.get("/", ProductParent.GetAll);
  
// Retrieve a single contact type with product parent Id
router.get("/id/:productParentId", ProductParent.GetById);

// Retrieve a single contact type with product parent Name
router.get("/name/:productParentName", ProductParent.GetByName);

// Update a product parent with product parent Id
router.put("/:productParentId", ProductParent.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;