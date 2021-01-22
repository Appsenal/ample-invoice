const express = require('express');
const router = express.Router();
const city = require("../controllers/city-controller");

// Add a new city
router.post("/", city.create);

// Retrieve all cities
router.get("/", city.findAll);
  
// Retrieve a single city with cityId
router.get("/id/:cityId", city.GetById);

// Retrieve a single city with cityName
router.get("/name/:cityName", city.GetByName);

// Retrieve a single city with province id
router.get("/province-id/:provinceId", city.GetByProvinceId);

// Retrieve a single city with province name
router.get("/province-name/:provinceName", city.GetByProvinceName);

// Retrieve a single city with country id
router.get("/country-id/:countryId", city.GetByCountryId);

// Retrieve a single city with country name
router.get("/country-name/:countryName", city.GetByCountryName);

// Update a country with countryId
router.put("/:cityId", city.updateById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;