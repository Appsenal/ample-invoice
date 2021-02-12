const express = require('express');
const router = express.Router();
const invoiceProduct = require("../controllers/invoice-product-controller");

// Add a new invoice product
router.post("/", invoiceProduct.Create); 

// Retrieve all invoice products
router.get("/", invoiceProduct.GetAll);
  
// Retrieve a invoice product by invoice product Id
router.get("/:invoiceProductId", invoiceProduct.GetById);

// Retrieve a invoice product by invoice Id
router.get("/invoice-id/:invoiceId", invoiceProduct.GetByInvoiceId);

// Retrieve an invoice by client Name
router.get("/product-name/:productName", invoiceProduct.GetByProductName);

// Retrieve a invoice by invoice date
router.get("/product-id/:productId", invoiceProduct.GetByProductId);

// Update a invoice with invoice Id
router.put("/:invoiceProductId", invoiceProduct.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;