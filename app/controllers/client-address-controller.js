const ClientAddress = require("../models/client-address-model");

/* Add new client address. */
exports.Create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)

    const address2 = req.body.address2 === undefined ? "" : req.body.address2; 

    // Add a client address
    const clientAddress = new ClientAddress({
        clientId: req.body.client_id,
        address1: req.body.address1,
        //address2: req.body.address2,
        address2: address2,
        cityId: req.body.city_id,
        provinceId: req.body.province_id,
        countryId: req.body.country_id,
        postalCode: req.body.postal_code
    });
    
    try {
        res.json(await ClientAddress.Insert(clientAddress));
        console.log("Added new client address");
    } catch (err) {
        console.error('Error while adding the client address ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the client address"});
        next(err);
    }
};

/* GET all the client address. */
exports.GetAll = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectAll());
    } catch (err) {
        console.error('Error while getting the client address', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address. "+err.message});
        next(err);
    }
};

// Get the client address by client address Id
exports.GetById = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectById(req.params.clientAddressId));
    } catch (err) {
        console.error('Error while getting the client address with client address id '+req.params.clientAddressId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with client address id "+req.params.clientAddressId});
        next(err);
    }
};

// Get the client address by client Id
exports.GetByClientId = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByClientId(req.params.clientId));
    } catch (err) {
        console.error('Error while getting the client address with client id '+req.params.clientId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with client id "+req.params.clientId});
        next(err);
    }
};

// Get the client address by client name
exports.GetByClientName = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByClientName(req.params.clientName));
    } catch (err) {
        console.error('Error while getting the client address with client name '+req.params.clientName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with client name "+req.params.clientName});
        next(err);
    }
};

// Get the client address by city Id
exports.GetByCityId = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByCityId(req.params.cityId));
    } catch (err) {
        console.error('Error while getting the client address with city id '+req.params.cityId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with city id "+req.params.cityId});
        next(err);
    }
};

// Get the client address by city name
exports.GetByCityName = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByCityName(req.params.cityName));
    } catch (err) {
        console.error('Error while getting the client address with city name '+req.params.cityName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with city name "+req.params.cityName});
        next(err);
    }
};

// Get the client address by province Id
exports.GetByProvinceId = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByProvinceId(req.params.provinceId));
    } catch (err) {
        console.error('Error while getting the client address with province id '+req.params.provinceId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with province id "+req.params.provinceId});
        next(err);
    }
};

// Get the client address by province Name
exports.GetByProvinceName = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByProvinceName(req.params.provinceName));
    } catch (err) {
        console.error('Error while getting the client address with province name '+req.params.provinceName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with province name "+req.params.provinceName});
        next(err);
    }
};

// Get the client address by country Id
exports.GetByCountryId = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByCountryId(req.params.countryId));
    } catch (err) {
        console.error('Error while getting the client address with country id '+req.params.countryId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with country id "+req.params.countryId});
        next(err);
    }
};

// Get the client address by province Name
exports.GetByCountryName = async function(req, res, next) {
    try {
        res.json(await ClientAddress.SelectByCountryName(req.params.countryName));
    } catch (err) {
        console.error('Error while getting the client address with country name '+req.params.countryName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the client address with country name "+req.params.countryName});
        next(err);
    }
};

// Update a client address identified by the client addtess Id in the request
exports.EditById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    const address2 = req.body.address2 === undefined ? "" : req.body.address2; 

    // Add a client address
    const clientAddress = new ClientAddress({
        clientId: req.body.client_id,
        address1: req.body.address1,
        address2: address2,
        cityId: req.body.city_id,
        provinceId: req.body.province_id,
        countryId: req.body.country_id,
        postalCode: req.body.postal_code
    });
    
    try {
        res.json(await ClientAddress.UpdateById(req.params.clientAddressId, clientAddress));
        console.log("Updated client address id "+req.params.clientAddressId);
    } catch (err) {
        console.error('Error while updating the client address with client address id '+req.params.clientAddressId, err.message);
        res.json({message: "Failed: Error while updating the client address with client address id "+req.params.clientAddressId});
        next(err);
    }
};