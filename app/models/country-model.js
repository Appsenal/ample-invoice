const db = require('./db');

// constructor
const Country = function(country) {
  //this.email = customer.email;
  this.name = country.name;
  //this.active = customer.active;
};

Country.create = async function addcountry(country) {
  const data = await db.query("INSERT INTO invoice.country (country_name) VALUES (?)", [country.name]);
  const meta = {message: "Success! New country, "+country.name+" has been added."};

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

Country.getAll = async function getcountries() {
  const data = await db.query("SELECT * FROM invoice.country");
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: countries not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

Country.findById = async function getcountrybyid(countryId) {
  const data = await db.query("SELECT * FROM invoice.country WHERE country_id = ?", [countryId]);
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: country not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

Country.updateById = async function updatecountrybyid(countryId, country) {
  const data = await db.query("UPDATE invoice.country SET country_name = ? WHERE country_id = ?", [country.name, countryId]);
  const meta = {message: "success"};

  //check if the query is returning the country data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: country not found found";
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