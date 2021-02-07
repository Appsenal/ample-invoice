const db = require('./db');

const Client = function(client) {
    this.name = client.name;
    this.gender = client.gender;
};

Client.Insert = async function insertclient(client) {
    const meta = {return_code: 0, message: "Success! New client, "+client.name+" has been added."};
    const data = await db.query("INSERT INTO invoice.client (client_name, client_gender) VALUES (?, ?)", [client.name, client.gender]);

    return {
      data,
      meta
    }
}

Client.SelectAll = async function selectallclient() {
    const data = await db.query("SELECT * FROM invoice.client");
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client not found";
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

Client.SelectById = async function selectclientbyid(clientId) {
    const data = await db.query("SELECT * FROM invoice.client WHERE client_id = ?", [clientId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client not found";
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

Client.SelectByName = async function selectclientbyname(clientName) {
    const data = await db.query("SELECT * FROM invoice.client WHERE client_name LIKE ?", [clientName]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client not found";
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

Client.UpdateById = async function updateclientbyid(clientId, client) {
    var queryTxt = "UPDATE invoice.client SET ";
    var setName = "";
    var setGender = "";
    if (client.name) {
      setName = "client_name = "+db.escape(client.name);
    }
    if (client.gender) {
        setName = setName =="" ? setName : setName+", ";
        setGender = "client_gender = "+db.escape(client.gender);
    }
    console.log(queryTxt+setName+setGender+" WHERE client_id = ?");
    
    const data = await db.query(queryTxt+setName+setGender+" WHERE client_id = ?", [clientId]);
    const meta = {return_code: 0, message: "success"};
  
    //check if the query is returning the client data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Client not found found";
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

module.exports = Client;