const express = require('express');
const router = express.Router();
const world = require('../models/world');

/* GET worlds listing. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await world.getMultiple());
    } catch (err) {
        console.error('Error while getting the date ', err.message);
        next(err);
      }
});

module.exports = router;