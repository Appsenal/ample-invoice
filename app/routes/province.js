const express = require('express');
const router = express.Router();
const province = require("../controllers/province-controller");

// Add a new province
router.post("/", province.create);

// Retrieve all provinces
router.get("/", province.findAll);
  
// Retrieve a single province with provinceId
router.get("/id/:provinceId", province.GetById);

// Retrieve a single province with provinceName
router.get("/name/:provinceName", province.GetByName);

// Retrieve a single province with country id
router.get("/country-id/:countryId", province.GetByCountryId);

// Retrieve a single province with country name
router.get("/country-name/:countryName", province.GetByCountryName);

// Update a country with countryId
router.put("/:provinceId", province.updateById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;