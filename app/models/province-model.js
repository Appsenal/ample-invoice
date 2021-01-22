const db = require('./db');
//const Country = require("../models/country-model");

// constructor
const Province = function(province) {
  this.name = province.name;
  this.countryId = province.countryId;
};

Province.create = async function addprovince(province) {
    //Query the country provided if existing
    var data = await db.query("SELECT * FROM invoice.country WHERE country_id = ?", [province.countryId]);
    const meta = {message: "Success! New province, "+province.name+" has been added."};
    //check if the query is returning the country data
    if (data.length==0) {
        //the query did not return any results
        meta.message = "Failure: Country does not exists.";
    }
    else {
        //do here if there are country data
        //Query to determine if the province name is a duplicate or not
        data = await db.query("SELECT * FROM invoice.province WHERE province_name = ? AND country_id = ?", [province.name, province.countryId]);
        if (data.length==0) {
          data = await db.query("INSERT INTO invoice.province (province_name, country_id) VALUES (?, ?)", [province.name, province.countryId]);
        }
        else {
          //the query did not return any results
          meta.message = "Failure: Duplicate province.";
        }
    }

    return {
      data,
      meta
    }
}

Province.getAll = async function getallprovince() {
  const data = await db.query("SELECT * FROM invoice.province p JOIN invoice.country c ON p.country_id=c.country_id");
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: provinces not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

Province.selectById = async function getprovincebyid(provinceId) {
  const data = await db.query("SELECT * FROM invoice.province p JOIN invoice.country c ON p.country_id=c.country_id WHERE p.province_id = ?", [provinceId]);
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: province not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

Province.selectByName = async function getprovincebyname(provinceName) {
  const data = await db.query("SELECT * FROM invoice.province p JOIN invoice.country c ON p.country_id=c.country_id WHERE p.province_name = ?", [provinceName]);
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: province not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

Province.selectByCountryId = async function getprovincebycountryid(countryid) {
  const data = await db.query("SELECT * FROM invoice.province p JOIN invoice.country c ON p.country_id=c.country_id  WHERE p.country_id = ?", [countryid]);
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: province not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

Province.selectByCountryName = async function getprovincebycountryname(countryname) {
  const data = await db.query("SELECT * FROM invoice.province p JOIN invoice.country c ON p.country_id=c.country_id  WHERE c.country_name = ?", [countryname]);
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: province not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

Province.updateById = async function updateprovincebyid(provinceId, province) {
  var queryTxt = "UPDATE invoice.province SET ";
  var setProvinceName = "";
  var setCountryId = "";
  if (province.name) {
    //console.log("no province");
    setProvinceName = "province_name = "+db.escape(province.name);
  }
  if (province.countryId) {
    setProvinceName = setProvinceName =="" ? setProvinceName : setProvinceName+", ";
    setCountryId = "country_id = "+db.escape(province.countryId);
  }
  console.log(queryTxt+setProvinceName+setCountryId+" WHERE province_id = ?");
  //const data = await db.query("UPDATE invoice.province SET province_name = ?, country_id = ? WHERE province_id = ?", [province.name, province.countryId, provinceId]);
  const data = await db.query(queryTxt+setProvinceName+setCountryId+" WHERE province_id = ?", [provinceId]);
  const meta = {message: "success"};

  //check if the query is returning the country data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: province not found found";
  }
  else {
    //do here if there are country data
  }

  return {
    data,
    meta
  }
}

module.exports = Province;