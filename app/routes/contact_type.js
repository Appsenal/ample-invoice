const express = require('express');
const router = express.Router();
const contactType = require("../controllers/contact-type-controller");

// Add a new contact type
router.post("/", contactType.Create);

// Retrieve all contact types
router.get("/", contactType.GetAll);
  
// Retrieve a single contact type with contact type Id
router.get("/id/:contactTypeId", contactType.GetById);

// Retrieve a single contact type with contact type Name
router.get("/name/:contactTypeName", contactType.GetByName);

// Update a country with countryId
router.put("/:contactTypeId", contactType.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;