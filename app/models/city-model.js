const db = require('./db');

const City = function(city) {
    this.name = city.name;
    this.provinceId = city.provinceId;
};

//City.selectByName = async function getcitybyname(cityName) {
//  const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE ct.city_name = ?", [cityName]);
//  return data;
//}

//City.selectAll = async function getall(cityName) {
//  const data = await db.query("SELECT * FROM invoice.city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE ct.city_name = ?", [cityName]);
//  return data;
//}

City.Insert = async function insertcity(city) {
    //Query the province provided if exist
    var data = await db.query("SELECT * FROM province WHERE province_id = ?", [city.provinceId]);
    const meta = {return_code: 0, message: "Success! New city, "+city.name+" has been added."};
    //check if the query is returning the country data
    if (data.length==0) {
        //the query did not return any results
        meta.message = "Failure: Province does not exists.";
        meta.return_code = 1;
    }
    else {
        //do here if there are country data
        //Query to determine if the province name is a duplicate or not
        data = await db.query("SELECT * FROM city WHERE city_name = ? AND province_id = ?", [city.name, city.provinceId]);
        if (data.length==0) {
          data = await db.query("INSERT INTO city (city_name, province_id) VALUES (?, ?)", [city.name, city.provinceId]);
        }
        else {
          //the query did not return any results
          meta.message = "Failure: Duplicate city.";
          meta.return_code = 1;
        }
    }

    return {
      data,
      meta
    }
}

City.selectAll = async function getallcityjson() {
    const data = await db.query("SELECT * FROM city ct JOIN invoice.province p ON p.province_id=ct.province_id JOIN country c ON c.country_id = p.country_id");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Cities not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.SelectById = async function getcitybyid(cityId) {
    const data = await db.query("SELECT * FROM city ct JOIN province p ON p.province_id=ct.province_id JOIN country c ON c.country_id = p.country_id WHERE ct.city_id = ?", [cityId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: City not found";
      meta.return_code = 1;
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

City.selectByName = async function getcitybynamejson(cityName) {
    const data = await db.query("SELECT * FROM city ct JOIN province p ON p.province_id=ct.province_id JOIN country c ON c.country_id = p.country_id WHERE ct.city_name = ?", [cityName]);
    //const data = await City.selectByName(cityName);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
      meta.return_code = 1;
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
    const data = await db.query("SELECT * FROM city ct JOIN province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE ct.province_id = ?", [provinceId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
      meta.return_code = 1;
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
    const data = await db.query("SELECT * FROM city ct JOIN province p ON p.province_id=ct.province_id JOIN invoice.country c ON c.country_id = p.country_id WHERE p.province_name = ?", [provinceName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
      meta.return_code = 1;
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
    const data = await db.query("SELECT * FROM city ct JOIN province p ON p.province_id=ct.province_id JOIN country c ON c.country_id = p.country_id WHERE c.country_id = ?", [countryId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
      meta.return_code = 1;
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
    const data = await db.query("SELECT * FROM city ct JOIN province p ON p.province_id=ct.province_id JOIN country c ON c.country_id = p.country_id WHERE c.country_name = ?", [countryName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found";
      meta.return_code = 1;
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
    var queryTxt = "UPDATE city SET ";
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
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the country data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: city not found found";
      meta.return_code = 1;
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