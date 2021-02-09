const db = require('./db');
const Product = require("../models/product-model");
const ProductStatus = require("../models/product-status-model");

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
            data = await db.query("INSERT INTO product (product_parent_id, price, product_name, product_description, product_create_date) VALUES (?, ?, ?, ?, ?)", [product.productParentId, product.price, product.productName, product.productDescription, product.productCreateDate]);
        }
    }

    return {
      data,
      meta
    }
}

module.exports = Product;