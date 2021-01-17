const Country = require("../models/country-model.js");

/* Add new country listing. */
exports.create = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
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
        console.error('Error while adding the countries ', err.message);
        res.json({message: "Failed: Error while adding the countries"});
        next(err);
    }
};

/* GET country listing. */
exports.findAll = async function(req, res, next) {
    try {
        res.json(await Country.getAll());
    } catch (err) {
        console.error('Error while getting the countries', err.message);
        res.json({message: "Failed: Error while getting the countries"});
        next(err);
    }
};
// Find a single country with a ountryId
exports.findOne = async function(req, res, next) {
    try {
        res.json(await Country.findById(req.params.countryId));
    } catch (err) {
        console.error('Error while getting the country with country id '+req.params.country_id, err.message);
        res.json({message: "Failed: Error while getting the country with country id "+req.params.country_id});
        next(err);
    }
};

// Update a country identified by the countryId in the request
exports.update = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a country
    const country = new Country({
        name: req.body.country_name
    });
    
    try {
        res.json(await Country.updateById(req.params.countryId, country));
        console.log("Adding new country "+country.name);
    } catch (err) {
        console.error('Error while updating the country with country id '+req.params.country_id, err.message);
        res.json({message: "Failed: Error while updating the country with country id "+req.params.country_id});
        next(err);
    }
};

// Delete a Customer with the specified customerId in the request
//exports.delete = (req, res) => {
  
//};

// Delete all Customers from the database.
//exports.deleteAll = (req, res) => {
  
//};
