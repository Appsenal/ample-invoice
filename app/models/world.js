const db = require('../models/db');

async function getMultiple() {
  //const data = await db.query("SELECT * FROM world.country c LEFT JOIN world.city ct ON c.Code=ct.CountryCode WHERE c.Code='AFG'");
  //const data = await db.query("SELECT * FROM world.country WHERE Code='AFG'");
  const data = await db.query("SELECT * FROM world.country");
  const meta = {page: 1};
 
  //console.log(data);
  //console.log(data[0].Code);
  for (i=0;i<data.length;i++) {
    //console.log(data[i].Code);
    
    //insert new field "City" to the JSON object
    data[i].City = await db.query("SELECT * FROM world.city WHERE CountryCode='"+data[i].Code+"'");;
  } 

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}