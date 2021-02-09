const db = require('./db');
const City = require("../models/city-model");
const Client = require("../models/client-model");
const Province = require("../models/province-model");
const Country = require("../models/country-model");

const ClientAddress = function(clientAddress) {
    this.clientId = clientAddress.clientId;
    this.address1 = clientAddress.address1;
    this.address2 = clientAddress.address2;
    this.cityId = clientAddress.cityId;
    this.provinceId = clientAddress.provinceId;
    this.countryId = clientAddress.countryId;
    this.postalCode = clientAddress.postalCode;
};

ClientAddress.Insert = async function insertclientaddress(clientAddress) {
    var meta = {return_code: 0, message: "Success! New client address has been added."};
    var data = [];
    var result = {};

    //check if the client exists
    result = await Client.SelectById(clientAddress.clientId);

    //console.log(result);

    if (result.meta.return_code==1) {
        meta = result.meta;
    }
    else {
        //check if the country exists.
        result = await Country.SelectById(clientAddress.countryId);
        if (result.meta.return_code==1) {
            meta = result.meta;
        }
        else {
            //check if the province exists
            result = await Province.SelectById(clientAddress.provinceId);
            if (result.meta.return_code==1) {
                meta = result.meta;
            }
            else {
                //check if the city exists
                result = await City.SelectById(clientAddress.cityId);
                if (result.meta.return_code==1) {
                    meta = result.meta;
                }
                else {
                    data = await db.query("INSERT INTO client_address (client_id, address1, address2, city_id, province_id, country_id, postal_code) VALUES (?, ?, ?, ?, ?, ?, ?)", [clientAddress.clientId, clientAddress.address1, clientAddress.address2, clientAddress.cityId, clientAddress.provinceId, clientAddress.countryId, clientAddress.postalCode]);
                }
            }
        }
    }

    return {
      data,
      meta
    }
}

ClientAddress.SelectAll = async function selectallclient() {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectById = async function selectclientaddressbyid(clientAddressId) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE ca.client_address_id = ?", [clientAddressId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByClientId = async function selectclientaddressbyclientid(clientId) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE ca.client_id = ?", [clientId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByClientName = async function selectclientaddressbyclientname(clientName) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE c.client_name = ?", [clientName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByCityId = async function selectclientaddressbycityid(cityId) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE ca.city_id = ?", [cityId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByCityName = async function selectclientaddressbycityname(cityName) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE ct.city_name = ?", [cityName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByProvinceId = async function selectclientaddressbyprovinceid(provinceId) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE ca.province_id = ?", [provinceId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByProvinceName = async function selectclientaddressbyprovincename(provinceName) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE p.province_name = ?", [provinceName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByCountryId = async function selectclientaddressbycountryid(countryId) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE ca.country_id = ?", [countryId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.SelectByCountryName = async function selectclientaddressbycountryname(countryName) {
    const data = await db.query("SELECT * FROM client_address ca JOIN client c ON ca.client_id=c.client_id JOIN city ct ON ct.city_id=ca.city_id JOIN province p ON p.province_id=ca.province_id JOIN country cn ON cn.country_id=ca.country_id WHERE cn.country_name = ?", [countryName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found";
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

ClientAddress.UpdateById = async function updateclientaddressbyid(clientAddressId, clientAddress) {
    var queryTxt = "UPDATE client_address SET ";
    var setFields = "";
    if (clientAddress.clientId) {
        setFields = "client_id = "+db.escape(clientAddress.clientId);
    }
    if (clientAddress.address1) { 
        setFields = setFields == "" ? setFields : setFields+", ";
        setFields = setFields+"address1 = "+db.escape(clientAddress.address1);
    }
    if (clientAddress.address2) { 
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"address2 = "+db.escape(clientAddress.address2);
    }
    if (clientAddress.cityId) {
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"city_id = "+db.escape(clientAddress.cityId);
    }
    if (clientAddress.provinceId) {
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"province_id = "+db.escape(clientAddress.provinceId);
    }
    if (clientAddress.countryId) {
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"country_id = "+db.escape(clientAddress.countryId);
    }
    if (clientAddress.postalCode) {
        setFields = setFields =="" ? setFields : setFields+", ";
        setFields = setFields+"postal_code = "+db.escape(clientAddress.postalCode);
    }

    console.log(queryTxt+setFields+" WHERE client_address_id = ?");
    
    const data = await db.query(queryTxt+setFields+" WHERE client_address_id = ?", [clientAddressId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client address data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client address not found found";
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

module.exports = ClientAddress;