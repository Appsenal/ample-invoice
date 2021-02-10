const db = require('./db');
const Product = require("./product-model");
const ProductStatus = require("./product-status-model");

const ProductStatusLink = function(productStatusLink) {
    this.productId = productStatusLink.productId;
    this.productStatusId = productStatusLink.productStatusId;
    this.effectiveDate = productStatusLink.effectiveDate;
};

ProductStatusLink.Insert = async function insertproductstatuslink(productStatusLink) {
    var meta = {return_code: 0, message: "Success! New product status link has been added."};
    var data = [];
    var result = {};

    //check if the product exists
    result = await Product.SelectById(productStatusLink.productId);

    console.log(result);

    if (result.meta.return_code==1) {
        meta = result.meta;
    }
    else {
        //check if the product status exists
        result = await ProductStatus.SelectById(productStatusLink.productStatusId);
        if (result.meta.return_code==1) {
            meta = result.meta;
        }
        else {
            data = await db.query("INSERT INTO product_status_link (product_id, product_status_id, effective_date) VALUES (?, ?, ?)", [productStatusLink.productId, productStatusLink.productStatusId, productStatusLink.effectiveDate]);
        }
    }

    return {
      data,
      meta
    }
}

ProductStatusLink.SelectAll = async function selectallproductstatuslink() {
    const data = await db.query("SELECT * FROM product_status_link psl JOIN product p ON psl.product_id=p.product_id JOIN product_status ps ON ps.product_status_id=psl.product_status_id");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the product data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status link not found";
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

ProductStatusLink.SelectById = async function selectproductstatuslinkbyid(productStatusLinkId) {
    const data = await db.query("SELECT * FROM product_status_link psl JOIN product p ON psl.product_id=p.product_id JOIN product_status ps ON ps.product_status_id=psl.product_status_id WHERE psl.product_status_link_id = ?", [productStatusLinkId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status link not found";
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

ProductStatusLink.SelectByProductId = async function selectproductstatuslinkbyproductid(productId) {
    const data = await db.query("SELECT * FROM product_status_link psl JOIN product p ON psl.product_id=p.product_id JOIN product_status ps ON ps.product_status_id=psl.product_status_id WHERE psl.product_id = ?", [productId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status link not found";
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

  ProductStatusLink.SelectByProductName = async function selectproductstatuslinkbyproductname(productName) {
    const data = await db.query("SELECT * FROM product_status_link psl JOIN product p ON psl.product_id=p.product_id JOIN product_status ps ON ps.product_status_id=psl.product_status_id WHERE p.product_name = ?", [productName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status link not found";
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

ProductStatusLink.SelectByProductStatusId = async function selectproductstatuslinkbyproductstatusid(productStatusId) {
    const data = await db.query("SELECT * FROM product_status_link psl JOIN product p ON psl.product_id=p.product_id JOIN product_status ps ON ps.product_status_id=psl.product_status_id WHERE psl.product_status_id = ?", [productStatusId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status link not found";
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

  ProductStatusLink.SelectByProductStatusName = async function selectproductstatuslinkbyproductstatusName(productStatusName) {
    const data = await db.query("SELECT * FROM product_status_link psl JOIN product p ON psl.product_id=p.product_id JOIN product_status ps ON ps.product_status_id=psl.product_status_id WHERE ps.product_status_name = ?", [productStatusName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status link not found";
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

  ProductStatusLink.UpdateById = async function updateproductstatuslinkbyid(productStatusLinkId, productStatusLink) {
    var queryTxt = "UPDATE product_status_link SET ";
    var setFields = "";
    if (productStatusLink.productId) {
        setFields = "product_id = "+db.escape(productStatusLink.productId);
    }
    if (productStatusLink.productStatusId) { 
        setFields = setFields == "" ? setFields : setFields+", ";
        setFields = setFields+"product_status_id = "+db.escape(productStatusLink.productStatusId);
    }
    if (productStatusLink.effectiveDate) { 
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"effective_date = "+db.escape(productStatusLink.effectiveDate);
    }
  
    console.log(queryTxt+setFields+" WHERE product_status_link_id = ?");
    
    const data = await db.query(queryTxt+setFields+" WHERE product_status_link_id = ?", [productStatusLinkId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status link not found";
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

module.exports = ProductStatusLink;