const db = require('./db');

const ProductParent = function(productParent) {
    this.name = productParent.name;
    this.description = productParent.description;
};

ProductParent.Insert = async function insertproductparent(productParent) {
    const meta = {return_code: 0, message: "Success! New product parent, "+productParent.name+" has been added."};
    //Query to determine if the product parent name is a duplicate or not
    data = await db.query("SELECT * FROM product_parent WHERE product_parent_name = ?", [productParent.name]);
    if (data.length==0) {
        data = await db.query("INSERT INTO product_parent (product_parent_name, product_parent_desc) VALUES (?, ?)", [productParent.name, productParent.description]);
    }
    else {
        //the query did not return any results
        meta.message = "Failure: Duplicate product parent.";
        meta.return_code = 1;
    }
    //}

    return {
      data,
      meta
    }
}

ProductParent.SelectAll = async function selectallproductparent() {
    const data = await db.query("SELECT * FROM product_parent");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the product parent data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product parent not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are product parent data
    }
  
    return {
      data,
      meta
    }
}

ProductParent.SelectById = async function selectproductparentbyid(productParentId) {
    const data = await db.query("SELECT * FROM product_parent WHERE product_parent_id = ?", [productParentId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the product parent
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product parent not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are product parent
    }
  
    return {
      data,
      meta
    }
}

ProductParent.SelectByName = async function selectproductparentbyname(productParentName) {
    const data = await db.query("SELECT * FROM product_parent WHERE product_parent_name = ?", [productParentName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the product parent
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product parent not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are product parent
    }
  
    return {
      data,
      meta
    }
}

ProductParent.UpdateById = async function updateproductparentbyid(productParentId, productParent) {
    var queryTxt = "UPDATE product_parent SET ";
    var setName = "";
    var setDesc = "";
    if (productParent.name) {
      setName = "product_parent_name = "+db.escape(productParent.name);
    }
    if (productParent.description) {
        setName = setName =="" ? setName : setName+", ";
        setDesc = "product_parent_desc = "+db.escape(productParent.description);
    }
    console.log(queryTxt+setName+setDesc+" WHERE product_parent_id = ?");
    
    const data = await db.query(queryTxt+setName+setDesc+" WHERE product_parent_id = ?", [productParentId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the product parent
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Product parent not found found";
      meta.return_code = 1;
    }
    else {
      //do here if there are product parent
    }
  
    return {
      data,
      meta
    }
}

module.exports = ProductParent;