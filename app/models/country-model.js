const db = require('./db');

// constructor
const Country = function(country) {
  //this.email = customer.email;
  this.name = country.name;
  //this.active = customer.active;
};

Country.Insert = async function addcountry(country) {
  const data = await db.query("INSERT INTO country (country_name) VALUES (?)", [country.name]);
  const meta = {return_code: 0, message: "Success! New country, "+country.name+" has been added."};

  //check if the query is returning the client data
  /*if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: No client found";
  }
  else {
    //do here if there are client data
  }*/

  return {
    data,
    meta
  }
}

Country.SelectAll = async function selectcountries() {
  const data = await db.query("SELECT * FROM country");
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: countries not found";
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

Country.SelectById = async function getcountrybyid(countryId) {
  const data = await db.query("SELECT * FROM country WHERE country_id = ?", [countryId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: country not found";
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

Country.UpdateById = async function updatecountrybyid(countryId, country) {
  const data = await db.query("UPDATE country SET country_name = ? WHERE country_id = ?", [country.name, countryId]);
  const meta = {return_code: 0, message: "success"};

  //check if the query is returning the country data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: country not found found";
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

module.exports = Country;