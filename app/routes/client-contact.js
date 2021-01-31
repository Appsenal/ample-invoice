const express = require('express');
const router = express.Router();
const clientContact = require("../controllers/client-contact-controller");

// Add a new client
router.post("/", clientContact.Create);

// Retrieve all clients
router.get("/", clientContact.GetAll);
  
// Retrieve client contact by client Id
router.get("/client-id/:clientId", clientContact.GetByClientId);

// Retrieve client contact by client Name
router.get("/client-name/:clientName", clientContact.GetByClientName);

// Update a country with countryId
router.put("/:clientContactId", clientContact.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;