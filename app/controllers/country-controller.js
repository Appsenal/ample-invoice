const Country = require("../models/country-model");

/* Add new country listing. */
exports.create = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            return_code: 1,
            message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    //console.log(req.body.country_name)
    
    // Add a country
    const country = new Country({
        //email: req.body.email,
        //name: req.body.name,
        //active: req.body.active
        name: req.body.country_name
    });
    
    try {
        res.json(await Country.create(country));
        console.log("Adding new country "+country.name);
    } catch (err) {
        console.error('Error while adding the country ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the country. "+err.message});
        next(err);
    }
};

/* GET country listing. */
exports.findAll = async function(req, res, next) {
    try {
        res.json(await Country.getAll());
    } catch (err) {
        console.error('Error while getting the countries', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the countries. "+err.message});
        next(err);
    }
};
// Find a single country with a countryId
exports.findOne = async function(req, res, next) {
    try {
        res.json(await Country.SelectById(req.params.countryId));
    } catch (err) {
        console.error('Error while getting the country with country id '+req.params.countryId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the country with country id "+req.params.countryId});
        next(err);
    }
};

// Update a country identified by the countryId in the request
exports.update = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            return_code: 1, 
            message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Get country value
    const country = new Country({
        name: req.body.country_name
    });
    
    try {
        res.json(await Country.updateById(req.params.countryId, country));
        console.log("Updated country id "+req.params.countryId);
    } catch (err) {
        console.error('Error while updating the country with country id '+req.params.countryId, err.message);
        res.json({return_code: 1, message: "Failed: Error while updating the country with country id "+req.params.countryId});
        next(err);
    }
};

// Delete a Customer with the specified customerId in the request
//exports.delete = (req, res) => {
  
//};

// Delete all Customers from the database.
//exports.deleteAll = (req, res) => {
  
//};
