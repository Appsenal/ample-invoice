const express = require('express');
const router = express.Router();
//const client = require('../models/country-model');
const countries = require("../controllers/country-controller.js");

// Add a new Country
router.post("/", countries.create);

// Retrieve all Countries
router.get("/", countries.findAll);


  // Create a new Customer
  //app.post("/countries", countries.create);
  
  // Retrieve all Customers
  //app.get("/countries", countries.findAll);

  // Retrieve a single Customer with customerId
  //app.get("/countries/:countryId", countries.findOne);

  // Update a Customer with customerId
  //app.put("/countries/:countryId", countries.update);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Create a new Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;