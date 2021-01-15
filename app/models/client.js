const db = require('./db');

async function getclients() {
  const data = await db.query("SELECT * FROM invoice.client");
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

module.exports = {
    getclients
}