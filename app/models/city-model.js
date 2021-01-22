const db = require('./db');

const City = function(city) {
    this.name = city.name;
    this.provinceId = city.provinceId;
};

City.create = async function addcity(city) {
    //Query the province provided if exist
    var data = await db.query("SELECT * FROM invoice.province WHERE province_id = ?", [city.provinceId]);
    const meta = {message: "Success! New city, "+city.name+" has been added."};
    //check if the query is returning the country data
    if (data.length==0) {
        //the query did not return any results
        meta.message = "Failure: Province does not exists.";
    }
    else {
        //do here if there are country data
        //Query to determine if the province name is a duplicate or not
        data = await db.query("SELECT * FROM invoice.city WHERE city_name = ? AND province_id = ?", [city.name, city.provinceId]);
        if (data.length==0) {
          data = await db.query("INSERT INTO invoice.city (city_name, province_id) VALUES (?, ?)", [city.name, city.provinceId]);
        }
        else {
          //the query did not return any results
          meta.message = "Failure: Duplicate city.";
        }
    }

    return {
      data,
      meta
    }
}

City.getAll = async function getallcity() {
    const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id");
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Cities not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.selectById = async function getcitybyid(cityId) {
    const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE ct.city_id = ?", [cityId]);
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: City not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.selectByName = async function getcitybyname(cityName) {
    const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE ct.city_name = ?", [cityName]);
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.selectByProvinceId = async function getcitybyprovinceid(provinceId) {
    const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE ct.province_id = ?", [provinceId]);
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.selectByProvinceName = async function getcitybyprovincename(provinceName) {
    const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE p.province_name = ?", [provinceName]);
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.selectByCountryId = async function getcitybycountryid(countryId) {
    const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE c.country_id = ?", [countryId]);
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.selectByCountryName = async function getcitybycountryname(countryName) {
    const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE c.country_name = ?", [countryName]);
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.updateById = async function updatebyid(cityId, city) {
    var queryTxt = "UPDATE invoice.city SET ";
    var setCityName = "";
    var setProvinceId = "";
    if (city.name) {
      //console.log("no province");
      setCityName = "city_name = "+db.escape(city.name);
    }
    if (city.provinceId) {
        setCityName = setCityName =="" ? setCityName : setCityName+", ";
        setProvinceId = "province_id = "+db.escape(city.provinceId);
    }
    console.log(queryTxt+setCityName+setProvinceId+" WHERE city_id = ?");
    
    const data = await db.query(queryTxt+setCityName+setProvinceId+" WHERE city_id = ?", [cityId]);
    const meta = {message: "success"};
  
    //check if the query is returning the country data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found found";
    }
    else {
      //do here if there are country data
    }
  
    return {
      data,
      meta
    }
}

module.exports = City;