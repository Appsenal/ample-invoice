const express = require('express');
const router = express.Router();
const clientAddress = require("../controllers/client-address-controller");

// Add a new client address
router.post("/", clientAddress.Create); 

// Retrieve all client addresses
router.get("/", clientAddress.GetAll);
  
// Retrieve a single client address with client address Id
router.get("/:clientAddressId", clientAddress.GetById);

// Retrieve a single client address with client Id
router.get("/client-id/:clientId", clientAddress.GetByClientId);

// Retrieve a single client address with client Name
router.get("/client-name/:clientName", clientAddress.GetByClientName);

// Retrieve a single client address with city Id
router.get("/city-id/:cityId", clientAddress.GetByCityId);

// Retrieve a single client address with client Name
router.get("/city-name/:cityName", clientAddress.GetByCityName);

// Retrieve a single client address with city Id
router.get("/province-id/:provinceId", clientAddress.GetByProvinceId);

// Retrieve a client address with province name
router.get("/province-name/:provinceName", clientAddress.GetByProvinceName);

// Retrieve a client address with country id
router.get("/country-id/:countryId", clientAddress.GetByCountryId);

// Retrieve client address with country name
router.get("/country-name/:countryName", clientAddress.GetByCountryName);

// Update a client address with client address Id
router.put("/:clientAddressId", clientAddress.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;