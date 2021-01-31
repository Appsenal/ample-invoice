const ClientContact = require("../models/client-contact-model");

/* Add new client contact. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a client contact
    const clientcontact = new ClientContact({
        clientId: req.body.client_id,
        contactTypeId: req.body.contact_type_id,
        contactValue: req.body.contact_value
    });
    
    try {
        res.json(await ClientContact.Insert(clientcontact));
        console.log("Adding new client contact "+clientcontact.contactValue);
    } catch (err) {
        console.error('Error while adding the client contact ', err.message);
        res.json({message: "Failed: Error while adding the client contact"});
        next(err);
    }
};

/* GET all the client contacts. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await ClientContact.SelectAll());
    } catch (err) {
        console.error('Error while getting the client contacts', err.message);
        res.json({message: "Failed: Error while getting the client contacts. "+err.message});
        next(err);
    }
};

// Find a client with a client id
exports.GetByClientId = async function(req, res, next) {
    try {
        res.json(await ClientContact.SelectByClientId(req.params.clientId));
    } catch (err) {
        console.error('Error while getting the client contact with client id '+req.params.clientId, err.message);
        res.json({message: "Failed: Error while getting the client contact with client id "+req.params.clientId});
        next(err);
    }
};

// Find a client with a client id
exports.GetByClientName = async function(req, res, next) {
    try {
        res.json(await ClientContact.SelectByClientName(req.params.clientName));
    } catch (err) {
        console.error('Error while getting the client contact with client name '+req.params.clientName, err.message);
        res.json({message: "Failed: Error while getting the client contact with client name "+req.params.clientName});
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
    
    // Add a client contact
    const clientcontact = new ClientContact({
        clientId: req.body.client_id,
        contactTypeId: req.body.contact_type_id,
        contactValue: req.body.contact_value
    });
    
    try {
        res.json(await ClientContact.UpdateById(req.params.clientContactId, clientcontact));
        console.log("Updated contact type id "+req.params.clientContactId);
    } catch (err) {
        console.error('Error while updating the client contact with client contact id '+req.params.clientContactId, err.message);
        res.json({message: "Failed: Error while updating the client contact with client contact id "+req.params.clientContactId});
        next(err);
    }
};