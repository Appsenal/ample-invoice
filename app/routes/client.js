const express = require('express');
const router = express.Router();
const client = require("../controllers/client-controller");

// Add a new client
router.post("/", client.Create);

// Retrieve all clients
router.get("/", client.GetAll);
  
// Retrieve a single contact type with contact type Id
router.get("/id/:clientId", client.GetById);

// Retrieve a single contact type with contact type Name
router.get("/name/:clientName", client.GetByName);

// Update a country with countryId
router.put("/:clientId", client.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;