const db = require('./db');

// constructor
const Country = function(country) {
  //this.email = customer.email;
  this.country_name = country.country_name;
  //this.active = customer.active;
};

Country.create = async function addcountries(countryName) {
  const data = await db.query("INSERT INTO invoice.country (country_name) VALUES ('Pierreland')");//, countryName);
  const meta = {message: "success? New country, "+countryName+" has been added."};

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
    meta.message = "Error: No client found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

module.exports = Country;