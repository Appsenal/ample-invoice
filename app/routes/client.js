const express = require('express');
const router = express.Router();
const client = require('../models/client');

/* GET clients listing. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await client.getclients());
    } catch (err) {
        console.error('Error while getting the clients ', err.message);
        next(err);
      }
});

/* GET clients listing. */
/*router.get('/', async function(req, res, next) {
    try {
        res.json(await client.getclients());
    } catch (err) {
        console.error('Error while getting the clients ', err.message);
        next(err);
      }
});*/

module.exports = router;