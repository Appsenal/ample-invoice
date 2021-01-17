const express = require('express');
const router = express.Router();
//const client = require('../models/country-model');
const countries = require("../controllers/country-controller.js");

// Add a new Country
router.post("/", countries.create);

// Retrieve all Countries
router.get("/", countries.findAll);
  
// Retrieve a single country with countryId
router.get("/:countryId", countries.findOne);

// Update a Customer with customerId
router.put("/:countryId", countries.update);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;