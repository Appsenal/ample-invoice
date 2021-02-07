const Province = require("../models/province-model");

/* Add new province. */
exports.create = async function(req, res, next) {
    // Validate request 
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }

    console.log(req.body)
    
    // Add a province
    const province = new Province({
        name: req.body.province_name,
        countryId: req.body.country_id
    });
    
    try {
        res.json(await Province.create(province));
        console.log("Adding new province "+province.name);
    } catch (err) {
        console.error('Error while adding the province ', err.message);
        res.json({return_code: 1, message: "Failed: Error while adding the province"});
        next(err);
    }
};

/* GET all the provinces. */
exports.findAll = async function(req, res, next) {
    try {
        res.json(await Province.getAll());
    } catch (err) {
        console.error('Error while getting the provinces', err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the provinces. "+err.message});
        next(err);
    }
};

// Find a province with a provinceId
exports.GetById = async function(req, res, next) {
    try {
        res.json(await Province.SelectById(req.params.provinceId));
    } catch (err) {
        console.error('Error while getting the province with province id '+req.params.provinceId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the province with province id "+req.params.provinceId});
        next(err);
    }
};

// Find a province with a province name
exports.GetByName = async function(req, res, next) {
    try {
        res.json(await Province.selectByName(req.params.provinceName));
    } catch (err) {
        console.error('Error while getting the province with province name '+req.params.provinceName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the province with province name "+req.params.provinceName});
        next(err);
    }
};

// Find a province with a country id
exports.GetByCountryId = async function(req, res, next) {
    try {
        res.json(await Province.selectByCountryId(req.params.countryId));
    } catch (err) {
        console.error('Error while getting the province with country id '+req.params.countryId, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the province with country id "+req.params.countryId});
        next(err);
    }
};

// Find a province with a country id
exports.GetByCountryName = async function(req, res, next) {
    try {
        res.json(await Province.selectByCountryName(req.params.countryName));
    } catch (err) {
        console.error('Error while getting the province with country name '+req.params.countryName, err.message);
        res.json({return_code: 1, message: "Failed: Error while getting the province with country name "+req.params.countryName});
        next(err);
    }
};

// Update a country identified by the countryId in the request
exports.updateById = async function(req, res, next) {
    //var provinceName;
    //var countryId;
    
    // Validate request
    if (!req.body) {
        res.status(400).send({
            return_code: 1, message: "Content can not be empty!"
        });
    }
    //else {
    //    if (!req.body.province_name || !req.body.country_id) {
            
    //        console.log("missing one value");
    //    }
    //}

    console.log(req.body)
    
    // Get a province values
    const province = new Province({
        name: req.body.province_name,
        countryId: req.body.country_id
    });
    
    try {
        res.json(await Province.updateById(req.params.provinceId, province));
        console.log("Updated province id "+req.params.provinceId);
    } catch (err) {
        console.error('Error while updating the province with province id '+req.params.provinceId, err.message);
        res.json({return_code: 1, message: "Failed: Error while updating the province with province id "+req.params.provinceId});
        next(err);
    }
};