const db = require('./db');
const Client = require("./client-model");
//const ProductStatus = require("./product-status-model");

const Invoice = function(invoice) {
    this.clientId = invoice.clientId;
    this.invoiceDate = invoice.invoiceDate;
    this.paymentDate = invoice.paymentDate;
    this.invoiceDiscount = invoice.invoiceDiscount;
};

//add the invoice details to the database
Invoice.Insert = async function insertinvoice(invoice) {
    var meta = {return_code: 0, message: "Success! New invoice has been added."};
    var data = [];
    var result = {};

    //check if the client associated to the invoice exists
    result = await Client.SelectById(invoice.clientId);

    console.log(result);

    if (result.meta.return_code==1) {
        meta = result.meta;
    }
    else {
        data = await db.query("INSERT INTO invoice (client_id, invoice_date, payment_date, invoice_discount) VALUES (?, ?, ?, ?)", [invoice.clientId, invoice.invoiceDate, invoice.paymentDate, invoice.invoiceDiscount]);
    }

    return {
      data,
      meta
    }
}

//select all invoices from the database
Invoice.SelectAll = async function selectallinvoices() {
    const data = await db.query("SELECT * FROM invoice i JOIN client c ON i.client_id=c.client_id");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the product data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are product data
    }
  
    return {
      data,
      meta
    }
}

//select all invoice by Id from the database
Invoice.SelectById = async function selectinvoicebyid(invoiceId) {
    const data = await db.query("SELECT * FROM invoice i JOIN client c ON i.client_id=c.client_id WHERE i.invoice_id = ?", [invoiceId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the invoice data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client address data
    }
  
    return {
      data,
      meta
    }
}

//select all invoice by client Id from the database
Invoice.SelectByClientId = async function selectinvoicebyclientid(clientId) {
    const data = await db.query("SELECT * FROM invoice i JOIN client c ON i.client_id=c.client_id WHERE i.client_id = ?", [clientId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the invoice data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client address data
    }
  
    return {
      data,
      meta
    }
}

//select all invoice by client name from the database
Invoice.SelectByClientName = async function selectinvoicebyclientname(clientName) {
    const data = await db.query("SELECT * FROM invoice i JOIN client c ON i.client_id=c.client_id WHERE c.client_name = ?", [clientName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the invoice data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client address data
    }
  
    return {
      data,
      meta
    }
}

//select all invoice by invoice date from the database
Invoice.SelectByInvoiceDate = async function selectinvoicebyinvoicedate(invoiceDate) {
    const data = await db.query("SELECT * FROM invoice i JOIN client c ON i.client_id=c.client_id WHERE i.invoice_date = ?", [invoiceDate]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the invoice data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client address data
    }
  
    return {
      data,
      meta
    }
}

//select all invoice by payment date from the database
Invoice.SelectByPaymentDate = async function selectinvoicebypaymentdate(paymentDate) {
    const data = await db.query("SELECT * FROM invoice i JOIN client c ON i.client_id=c.client_id WHERE i.payment_date = ?", [paymentDate]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the invoice data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client address data
    }
  
    return {
      data,
      meta
    }
}

//Update product status link by Id from the database
Invoice.UpdateById = async function updateinvoicebyid(invoiceId, invoice) {
    var queryTxt = "UPDATE invoice SET ";
    var setFields = "";
    if (invoice.clientId) {
        setFields = "client_id = "+db.escape(invoice.clientId);
    }
    if (invoice.invoiceDate) { 
        setFields = setFields == "" ? setFields : setFields+", ";
        setFields = setFields+"invoice_date = "+db.escape(invoice.invoiceDate);
    }
    if (invoice.paymentDate) { 
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"payment_date = "+db.escape(invoice.paymentDate);
    }
    if (invoice.invoiceDiscount) { 
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"invoice_discount = "+db.escape(invoice.invoiceDiscount);
    }
  
    console.log(queryTxt+setFields+" WHERE invoice_id = ?");
    
    const data = await db.query(queryTxt+setFields+" WHERE invoice_id = ?", [invoiceId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client address data
    }
  
    return {
      data,
      meta
    }
  }

module.exports = Invoice;