const db = require('./db');
const ProductParent = require("../models/product-parent-model");

const Product = function(product) {
    this.productParentId = product.productParentId;
    this.price = product.price;
    this.productName = product.productName;
    this.productDescription = product.productDescription;
    this.productCreateDate = product.productCreateDate;
};

Product.Insert = async function insertproduct(product) {
    var meta = {return_code: 0, message: "Success! New product has been added."};
    var data = [];
    var result = {};

    //check if the product parent exists
    result = await ProductParent.SelectById(product.productParentId);

    console.log(result);

    if (result.meta.return_code==1) {
        meta = result.meta;
    }
    else {
        data = await db.query("INSERT INTO product (product_parent_id, price, product_name, product_description, product_create_date) VALUES (?, ?, ?, ?, ?)", [product.productParentId, product.price, product.productName, product.productDescription, product.productCreateDate]);
    }

    return {
      data,
      meta
    }
}

Product.SelectAll = async function selectallproduct() {
    const data = await db.query("SELECT * FROM product p JOIN product_parent pp ON p.product_parent_id=pp.product_parent_id");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the product data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product not found";
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

Product.SelectById = async function selectproductbyid(productId) {
  const data = await db.query("SELECT * FROM product p JOIN product_parent pp ON p.product_parent_id=pp.product_parent_id WHERE p.product_id = ?", [productId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the client address data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Product not found";
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

Product.SelectByName = async function selectproductbyname(productName) {
  const data = await db.query("SELECT * FROM product p JOIN product_parent pp ON p.product_parent_id=pp.product_parent_id WHERE p.product_name = ?", [productName]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the client address data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Product not found";
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

Product.SelectByParentId = async function selectproductbyparentid(productParentId) {
  const data = await db.query("SELECT * FROM product p JOIN product_parent pp ON p.product_parent_id=pp.product_parent_id WHERE p.product_parent_id = ?", [productParentId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the product data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Product not found";
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

Product.SelectByParentName = async function selectproductbyparentname(productParentName) {
  const data = await db.query("SELECT * FROM product p JOIN product_parent pp ON p.product_parent_id=pp.product_parent_id WHERE pp.product_parent_name = ?", [productParentName]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the product data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Product not found";
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

Product.UpdateById = async function updateproductbyid(productId, product) {
  var queryTxt = "UPDATE product SET ";
  var setFields = "";
  if (product.productParentId) {
      setFields = "product_parent_id = "+db.escape(product.productParentId);
  }
  if (product.price) { 
      setFields = setFields == "" ? setFields : setFields+", ";
      setFields = setFields+"price = "+db.escape(product.price);
  }
  if (product.productName) { 
      setFields = setFields =="" ? setFields : setFields+", ";
      setFields = setFields+"product_name = "+db.escape(product.productName);
  }
  if (product.productDescription) {
      setFields = setFields =="" ? setFields : setFields+", ";
      setFields = setFields+"product_description = "+db.escape(product.productDescription);
  }
  if (product.productCreateDate) {
      setFields = setFields =="" ? setFields : setFields+", ";
      setFields = setFields+"product_create_date = "+db.escape(product.productCreateDate);
  }

  console.log(queryTxt+setFields+" WHERE product_id = ?");
  
  const data = await db.query(queryTxt+setFields+" WHERE product_id = ?", [productId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the client address data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Product not found";
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

module.exports = Product;