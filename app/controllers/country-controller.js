const Country = require("../models/country-model.js");

/* Add new country listing. */
exports.create = async function(req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Add a country
    const country = new Country({
        //email: req.body.email,
        //name: req.body.name,
        //active: req.body.active
        country_name: req.body.country_name
    });
    
    try {
        res.json(await Country.create(country));
    } catch (err) {
        console.error('Error while getting the clients ', err.message);
        next(err);
    }
};

/* GET country listing. */
exports.findAll = async function(req, res, next) {
    try {
        res.json(await Country.getAll());
    } catch (err) {
        console.error('Error while getting the clients ', err.message);
        next(err);
    }
};
/*router.get('/', async function(req, res, next) {
    try {
        res.json(await client.getclients());
    } catch (err) {
        console.error('Error while getting the clients ', err.message);
        next(err);
      }
});*/

// Create and Save a new Customer
/*exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const country = new Country({
        //email: req.body.email,
        //name: req.body.name,
        //active: req.body.active
        name: req.body.name
    });

    // Save Customer in the database
    Country.create(country, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Customer."
        });
        else res.send(data);
    });
};*/

// Retrieve all Customers from the database.
/*exports.findAll = (req, res) => {
    Country.getAll((err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        }
        else {
            //check if the query is returning the country data
            if (data.length==0) {
                //the query did not return any results
                data.message = "Error: No countries found";
                console.log(data);
            }
            else {
                //do here if there are client data
            }
            res.send(data);
        }
    });
};*/
/*
// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};
*/