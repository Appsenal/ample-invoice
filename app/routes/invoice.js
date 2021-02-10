const express = require('express');
const router = express.Router();
const invoice = require("../controllers/invoice-controller");

// Add a new invoice
router.post("/", invoice.Create); 

// Retrieve all invoices
router.get("/", invoice.GetAll);
  
// Retrieve a invoie by invoice Id
router.get("/id/:invoiceId", invoice.GetById);

// Retrieve a invoice by client Id
router.get("/client-id/:clientId", invoice.GetByClientId);

// Retrieve an invoice by client Name
router.get("/client-name/:clientName", invoice.GetByClientName);

// Retrieve a invoice by invoice date
router.get("/invoice-date/:invoiceDate", invoice.GetByInvoiceDate);

// Retrieve a invoice with payment
router.get("/payment-date/:paymentDate", invoice.GetByPaymentDate);

// Update a invoice with invoice Id
router.put("/:invoiceId", invoice.EditById);

  // Delete a Customer with customerId
  //app.delete("/countries/:countryId", countries.delete);

  // Delete all Customer
  //app.delete("/countries", countries.deleteAll);

module.exports = router;