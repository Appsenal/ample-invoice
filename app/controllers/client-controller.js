const Client = require("../models/client-model");

/* Add new client. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a client
    const client = new Client({
        name: req.body.client_name,
        gender: req.body.client_gender
    });
    
    try {
        res.json(await Client.Insert(client));
        console.log("Adding new client "+client.name);
    } catch (err) {
        console.error('Error while adding the client ', err.message);
        res.json({message: "Failed: Error while adding the client"});
        next(err);
    }
};

/* GET all the clients. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await Client.SelectAll());
    } catch (err) {
        console.error('Error while getting the clients', err.message);
        res.json({message: "Failed: Error while getting the clients. "+err.message});
        next(err);
    }
};

// Find a client with a client id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await Client.SelectById(req.params.clientId));
    } catch (err) {
        console.error('Error while getting the client with client id '+req.params.clientId, err.message);
        res.json({message: "Failed: Error while getting the client with client id "+req.params.clientId});
        next(err);
    }
};

// Find a client with a client name
exports.GetByName = async function(req, res, next) {
    try {
        res.json(await Client.SelectByName(req.params.clientName));
    } catch (err) {
        console.error('Error while getting the client with client name '+req.params.clientName, err.message);
        res.json({message: "Failed: Error while getting the client with client name "+req.params.clientName});
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
    const client = new Client({
        name: req.body.client_name,
        gender: req.body.client_gender
    });
    
    try {
        res.json(await Client.UpdateById(req.params.clientId, client));
        console.log("Updated client id "+req.params.clientId);
    } catch (err) {
        console.error('Error while updating the client with client id '+req.params.clientId, err.message);
        res.json({message: "Failed: Error while updating the client with client id "+req.params.clientId});
        next(err);
    }
};