const db = require('./db');
const Invoice = require("./invoice-model");
const Product = require("./product-model");

const InvoiceProduct = function(invoiceProduct) {
    this.invoiceId = invoiceProduct.invoiceId;
    this.productId = invoiceProduct.productId;
    this.quantity = invoiceProduct.quantity;
    this.productDiscount = invoiceProduct.productDiscount;
};

//add the invoice product details to the database
InvoiceProduct.Insert = async function insertinvoiceproduct(invoiceProduct) {
    var meta = {return_code: 0, message: "Success! New invoice product has been added."};
    var data = [];
    var result = {};

    //check if the invoice associated to the invoice product exists
    result = await Invoice.SelectById(invoiceProduct.invoiceId);

    console.log(result);

    if (result.meta.return_code==1) {
        meta = result.meta;
    }
    else {
        //check if the product associated to the invoice product exists
        result = await Product.SelectById(invoiceProduct.productId);
        if (result.meta.return_code==1) {
            meta = result.meta;
        }
        else {
            data = await db.query("INSERT INTO invoice_product (invoice_id, product_id, quantity, product_discount) VALUES (?, ?, ?, ?)", [invoiceProduct.invoiceId, invoiceProduct.productId, invoiceProduct.quantity, invoiceProduct.productDiscount]);
        }
    }

    return {
      data,
      meta
    }
}

//select all invoice products from the database
InvoiceProduct.SelectAll = async function selectallinvoiceproducts() {
    const data = await db.query("SELECT * FROM invoice_product ip JOIN invoice i ON i.invoice_id=ip.invoice_id JOIN product p ON p.product_id=ip.product_id");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the invoice product data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice product not found";
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

//select all invoice product by Id from the database
InvoiceProduct.SelectById = async function selectinvoiceproductbyid(invoiceproductId) {
    const data = await db.query("SELECT * FROM invoice_product ip JOIN invoice i ON i.invoice_id=ip.invoice_id JOIN product p ON p.product_id=ip.product_id WHERE ip.invoice_product_id = ?", [invoiceproductId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the invoice product data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Invoice product not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are invoice product data
    }
  
    return {
      data,
      meta
    }
}

//select all invoice product by invoice Id from the database
InvoiceProduct.SelectByInvoiceId = async function selectinvoiceproductbyinvoiceid(invoiceId) {
  const data = await db.query("SELECT * FROM invoice_product ip JOIN invoice i ON i.invoice_id=ip.invoice_id JOIN product p ON p.product_id=ip.product_id WHERE i.invoice_id = ?", [invoiceId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the invoice product data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Invoice product not found";
    meta.return_code = 1;
  }
  else {
    //do here if there are invoice product data
  }

  return {
    data,
    meta
  }
}

//select all invoice product by product Id from the database
InvoiceProduct.SelectByProductId = async function selectinvoiceproductbyproductid(productId) {
  const data = await db.query("SELECT * FROM invoice_product ip JOIN invoice i ON i.invoice_id=ip.invoice_id JOIN product p ON p.product_id=ip.product_id WHERE p.product_id = ?", [productId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the invoice product data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Invoice product not found";
    meta.return_code = 1;
  }
  else {
    //do here if there are invoice product data
  }

  return {
    data,
    meta
  }
}

//select all invoice product by product name from the database
InvoiceProduct.SelectByProductName = async function selectinvoiceproductbyproductname(productName) {
  const data = await db.query("SELECT * FROM invoice_product ip JOIN invoice i ON i.invoice_id=ip.invoice_id JOIN product p ON p.product_id=ip.product_id WHERE p.product_name = ?", [productName]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the invoice product data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Invoice product not found";
    meta.return_code = 1;
  }
  else {
    //do here if there are invoice product data
  }

  return {
    data,
    meta
  }
}

//Update invoice product by Id from the database
InvoiceProduct.UpdateById = async function updateinvoiceproductbyid(invoiceProductId, invoiceProduct) {
  var queryTxt = "UPDATE invoice_product SET ";
  var setFields = "";
  if (invoiceProduct.invoiceId) {
      setFields = "invoice_id = "+db.escape(invoiceProduct.invoiceId);
  }
  if (invoiceProduct.productId) { 
      setFields = setFields == "" ? setFields : setFields+", ";
      setFields = setFields+"product_id = "+db.escape(invoiceProduct.productId);
  }
  if (invoiceProduct.quantity) { 
      setFields = setFields =="" ? setFields : setFields+", ";
      setFields = setFields+"quantity = "+db.escape(invoiceProduct.quantity);
  }
  if (invoiceProduct.productDiscount) { 
      setFields = setFields =="" ? setFields : setFields+", ";
      setFields = setFields+"product_discount = "+db.escape(invoiceProduct.productDiscount);
  }

  console.log(queryTxt+setFields+" WHERE invoice_product_id = ?");
  
  const data = await db.query(queryTxt+setFields+" WHERE invoice_product_id = ?", [invoiceProductId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the invoice product data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Invoice product not found";
    meta.return_code = 1;
  }
  else {
    //do here if there are invoice product data
  }

  return {
    data,
    meta
  }
}

module.exports = InvoiceProduct;