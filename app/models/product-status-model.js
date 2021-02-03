const db = require('./db');

const ProductStatus = function(productStatus) {
    this.name = productStatus.name;
    this.description = productStatus.description;
};

ProductStatus.Insert = async function insertproductstatus(productStatus) {
    const meta = {message: "Success! New product status, "+productStatus.name+" has been added."};
    //Query to determine if the product status name is a duplicate or not
    data = await db.query("SELECT * FROM invoice.product_status WHERE product_status_name = ?", [productStatus.name]);
    if (data.length==0) {
        data = await db.query("INSERT INTO invoice.product_status (product_status_name, product_status_desc) VALUES (?, ?)", [productStatus.name, productStatus.description]);
    }
    else {
        //the query did not return any results
        meta.message = "Failure: Duplicate product status.";
    }
    //}

    return {
      data,
      meta
    }
}

ProductStatus.SelectAll = async function selectallproductstatus() {
    const data = await db.query("SELECT * FROM invoice.product_status");
    const meta = {message: "success"};
  
    //check if the query is returning the product status data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status not found";
    }
    else {
      //do here if there are product status data
    }
  
    return {
      data,
      meta
    }
}

ProductStatus.SelectById = async function selectproductstatusbyid(productStatusId) {
    const data = await db.query("SELECT * FROM invoice.product_status WHERE product_status_id = ?", [productStatusId]);
    const meta = {message: "success"};
  
    //check if the query is returning the product status
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status not found";
    }
    else {
      //do here if there are product status
    }
  
    return {
      data,
      meta
    }
}

ProductStatus.SelectByName = async function selectproductstatusbyname(productStatusName) {
    const data = await db.query("SELECT * FROM invoice.product_status WHERE product_status_name = ?", [productStatusName]);
    const meta = {message: "success"};
  
    //check if the query is returning the product status
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status not found";
    }
    else {
      //do here if there are product status
    }
  
    return {
      data,
      meta
    }
}

ProductStatus.UpdateById = async function updateproductstatusbyid(productStatusId, productStatus) {
    var queryTxt = "UPDATE invoice.product_status SET ";
    var setName = "";
    var setDesc = "";
    if (productStatus.name) {
      setName = "product_status_name = "+db.escape(productStatus.name);
    }
    if (productStatus.description) {
        setName = setName =="" ? setName : setName+", ";
        setDesc = "product_status_desc = "+db.escape(productStatus.description);
    }
    console.log(queryTxt+setName+setDesc+" WHERE product_status_id = ?");
    
    const data = await db.query(queryTxt+setName+setDesc+" WHERE product_status_id = ?", [productStatusId]);
    const meta = {message: "success"};
  
    //check if the query is returning the product status
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product status not found found";
    }
    else {
      //do here if there are product status
    }
  
    return {
      data,
      meta
    }
}

module.exports = ProductStatus;