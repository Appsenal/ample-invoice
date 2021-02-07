const City = require("../models/city-model");

/* Add new city. */
exports.create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a city
    const city = new City({
        name: req.body.city_name,
        provinceId: req.body.province_id
    });
    
    try {
        res.json(await City.Insert(city));
        console.log("Adding new city "+city.name);
    } catch (err) {
        console.error('Error while adding the city ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the city"});
        next(err);
    }
};

/* GET all the cities. */
exports.findAll = async function(req, res, next) {
    try {
        res.json(await City.selectAll());
    } catch (err) {
        console.error('Error while getting the cities', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the cities. "+err.message});
        next(err);
    }
};

// Find a city with a cityId
exports.GetById = async function(req, res, next) {
    try {
        res.json(await City.SelectById(req.params.cityId));
    } catch (err) {
        console.error('Error while getting the city with city id '+req.params.cityId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the city with city id "+req.params.cityId});
        next(err);
    }
};

// Find a city with a city name
exports.GetByName = async function(req, res, next) {
    try {
        res.json(await City.selectByName(req.params.cityName));
    } catch (err) {
        console.error('Error while getting the city with city name '+req.params.cityName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the city with city name "+req.params.cityName});
        next(err);
    }
};

// Find a city with a province id
exports.GetByProvinceId = async function(req, res, next) {
    try {
        res.json(await City.selectByProvinceId(req.params.provinceId));
    } catch (err) {
        console.error('Error while getting the city with province id '+req.params.provinceId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the city with province id "+req.params.provinceId});
        next(err);
    }
};

// Find a city with a province name
exports.GetByProvinceName = async function(req, res, next) {
    try {
        res.json(await City.selectByProvinceName(req.params.provinceName));
    } catch (err) {
        console.error('Error while getting the city with province name '+req.params.provinceName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the city with province name "+req.params.provinceName});
        next(err);
    }
};

// Find a city with a country id
exports.GetByCountryId = async function(req, res, next) {
    try {
        res.json(await City.selectByCountryId(req.params.countryId));
    } catch (err) {
        console.error('Error while getting the city with country id '+req.params.countryId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the city with country id "+req.params.countryId});
        next(err);
    }
};

// Find a city with a country name
exports.GetByCountryName = async function(req, res, next) {
    try {
        res.json(await City.selectByCountryName(req.params.countryName));
    } catch (err) {
        console.error('Error while getting the city with country name '+req.params.countryName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the city with country name "+req.params.countryName});
        next(err);
    }
};

// Update a country identified by the countryId in the request
exports.updateById = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Get a city values
    const city = new City({
        name: req.body.city_name,
        provinceId: req.body.province_id
    });
    
    try {
        res.json(await City.updateById(req.params.cityId, city));
        console.log("Updated city id "+req.params.cityId);
    } catch (err) {
        console.error('Error while updating the city with city id '+req.params.cityId, err.message);
        res.json({return_code: 1, message: "Failed: Error while updating the city with city id "+req.params.cityId});
        next(err);
    }
};