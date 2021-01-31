const ContactType = require("../models/contact-type-model");

/* Add new contact type. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a contact type
    const contactType = new ContactType({
        name: req.body.contact_type_name,
        description: req.body.contact_type_desc
    });
    
    try {
        res.json(await ContactType.Insert(contactType));
        console.log("Adding new contact type "+contactType.name);
    } catch (err) {
        console.error('Error while adding the contact type ', err.message);
        res.json({message: "Failed: Error while adding the contact type"});
        next(err);
    }
};

/* GET all the contact types. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await ContactType.SelectAll());
    } catch (err) {
        console.error('Error while getting the contact types', err.message);
        res.json({message: "Failed: Error while getting the contact types. "+err.message});
        next(err);
    }
};

// Find a contact type with a contact type id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await ContactType.SelectById(req.params.contactTypeId));
    } catch (err) {
        console.error('Error while getting the contact type with contact type id '+req.params.contactTypeId, err.message);
        res.json({message: "Failed: Error while getting the contact type with contact type id "+req.params.contactTypeId});
        next(err);
    }
};

// Find a contact type with a contact type id
exports.GetByName = async function(req, res, next) {
    try {
        res.json(await ContactType.SelectByName(req.params.contactTypeName));
    } catch (err) {
        console.error('Error while getting the contact type with contact type name '+req.params.contactTypeName, err.message);
        res.json({message: "Failed: Error while getting the contact type with contact type name "+req.params.contactTypeName});
        next(err);
    }
};

// Update a country identified by the countryId in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Get a city values
    const contactType = new ContactType({
        name: req.body.contact_type_name,
        description: req.body.contact_type_desc
    });
    
    try {
        res.json(await ContactType.UpdateById(req.params.contactTypeId, contactType));
        console.log("Updated contact type id "+req.params.contactTypeId);
    } catch (err) {
        console.error('Error while updating the contact type with contact type id '+req.params.contactTypeId, err.message);
        res.json({message: "Failed: Error while updating the contact type with contact type id "+req.params.contactTypeId});
        next(err);
    }
};