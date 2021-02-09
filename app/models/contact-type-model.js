const db = require('./db');

const ContactType = function(contactType) {
    this.name = contactType.name;
    this.description = contactType.description;
};

ContactType.Insert = async function insertcontactype(contactType) {
    const meta = {message: "Success! New contact type, "+contactType.name+" has been added."};
    //Query to determine if the contact type name is a duplicate or not
    data = await db.query("SELECT * FROM contact_type WHERE contact_type_name = ?", [contactType.name]);
    if (data.length==0) {
        data = await db.query("INSERT INTO contact_type (contact_type_name, contact_type_desc) VALUES (?, ?)", [contactType.name, contactType.description]);
    }
    else {
        //the query did not return any results
        meta.message = "Failure: Duplicate contact type.";
    }
    //}

    return {
      data,
      meta
    }
}

ContactType.SelectAll = async function selectallcontacttypes() {
    const data = await db.query("SELECT * FROM contact_type");
    const meta = {message: "success"};
  
    //check if the query is returning the contact type data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Contact type not found";
    }
    else {
      //do here if there are contact type data
    }
  
    return {
      data,
      meta
    }
}

ContactType.SelectById = async function selectcontacttypebyid(contactTypeId) {
    const data = await db.query("SELECT * FROM contact_type WHERE contact_type_id = ?", [contactTypeId]);
    const meta = {message: "success"};
  
    //check if the query is returning the contact type data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Contact type not found";
    }
    else {
      //do here if there are contact type data
    }
  
    return {
      data,
      meta
    }
}

ContactType.SelectByName = async function selectcontacttypebyname(contactTypeName) {
    const data = await db.query("SELECT * FROM contact_type WHERE contact_type_name = ?", [contactTypeName]);
    const meta = {message: "success"};
  
    //check if the query is returning the contact type
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Contact type not found";
    }
    else {
      //do here if there are contact type
    }
  
    return {
      data,
      meta
    }
}

ContactType.UpdateById = async function updatecontacttypebyid(contactTypeId, contactType) {
    var queryTxt = "UPDATE contact_type SET ";
    var setName = "";
    var setDesc = "";
    if (contactType.name) {
      setName = "contact_type_name = "+db.escape(contactType.name);
    }
    if (contactType.description) {
        setName = setName =="" ? setName : setName+", ";
        setDesc = "contact_type_desc = "+db.escape(contactType.description);
    }
    console.log(queryTxt+setName+setDesc+" WHERE contact_type_id = ?");
    
    const data = await db.query(queryTxt+setName+setDesc+" WHERE contact_type_id = ?", [contactTypeId]);
    const meta = {message: "success"};
  
    //check if the query is returning the contact type data
    if (data.length==0) {
      //the query did not return any results
      meta.message = "Error: Contact Type not found found";
    }
    else {
      //do here if there are contact type data
    }
  
    return {
      data,
      meta
    }
}

module.exports = ContactType;