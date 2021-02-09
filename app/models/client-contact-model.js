const db = require('./db');

const ClientContact = function(clientcontact) {
    this.clientId = clientcontact.clientId;
    this.contactTypeId = clientcontact.contactTypeId;
    this.contactValue = clientcontact.contactValue;
};

ClientContact.Insert = async function insertclientcontact(clientcontact) {
    const meta = {message: "Success! New client contact, "+clientcontact.contactValue+" has been added."};
    //const data = {test: "test"};
    data = await db.query("INSERT INTO client_contact (client_id, contact_type_id, contact_value) VALUES (?, ?, ?)", [clientcontact.clientId, clientcontact.contactTypeId, clientcontact.contactValue]);

    return {
      data,
      meta 
    }
}

ClientContact.SelectAll = async function selectallclientcontact() {
    const data = await db.query("SELECT * FROM client_contact cc JOIN client c ON c.client_id=cc.client_id JOIN contact_type ct ON ct.contact_type_id=cc.contact_type_id");
    const meta = {message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client contact not found";
    }
    else {
      //do here if there are client data
    }
  
    return {
      data,
      meta
    }
}

ClientContact.SelectByClientId = async function selectbyclientid(clientId) {
  const data = await db.query("SELECT * FROM client_contact cc JOIN client c ON c.client_id=cc.client_id JOIN contact_type ct ON ct.contact_type_id=cc.contact_type_id WHERE cc.client_id = ?", [clientId]);
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Client contact not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

ClientContact.SelectByClientName = async function selectbyclientName(clientName) {
  const data = await db.query("SELECT * FROM client_contact cc JOIN client c ON c.client_id=cc.client_id JOIN contact_type ct ON ct.contact_type_id=cc.contact_type_id WHERE c.client_name = ?", [clientName]);
  const meta = {message: "success"};

  //check if the query is returning the client data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Client contact not found";
  }
  else {
    //do here if there are client data
  }

  return {
    data,
    meta
  }
}

ClientContact.UpdateById = async function updateclientcontactbyid(clientContactId, clientContact) {
  var queryTxt = "UPDATE client_contact SET ";
  //var setClientId = "";
  //var setContactTypeId = "";
  //var contactValue = "";
  var setFields = "";
  if (clientContact.clientId) {
    setFields = "client_id = "+db.escape(clientContact.clientId);
  }
  if (clientContact.contactTypeId) { 
    setFields = setFields =="" ? setFields : setFields+", ";
    setFields = setFields+"contact_type_id = "+db.escape(clientContact.contactTypeId);
  }
  if (clientContact.contactValue) {
    setFields = setFields =="" ? setFields : setFields+", ";
    setFields = setFields+"contact_value = "+db.escape(clientContact.contactValue);
  }

  console.log(queryTxt+setFields+" WHERE client_contact_id = ?");
  
  //const data = {sql:queryTxt+setFields+" WHERE client_contact_id = ?"};
  const data = await db.query(queryTxt+setFields+" WHERE client_contact_id = ?", [clientContactId]);
  const meta = {message: "success"};

  //check if the query is returning the country data
  if (data.length==0) {
    //the query did not return any results
    meta.message = "Error: Contact Type not found found";
  }
  else {
    //do here if there are country data
  }

  return {
    data,
    meta
  }
}

module.exports = ClientContact;