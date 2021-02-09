const express = require('express');
const router = express.Router();
//const client = require('../models/country-model');
const countries = require("../controllers/country-controller");

// Add a new Country
router.post("/", countries.Create);

// Retrieve all Countries
router.get("/", countries.GetAll);
  
// Retrieve a single country with countryId
router.get("/:countryId", countries.GetById);

// Update a country with countryId
router.put("/:countryId", countries.UpdateById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;