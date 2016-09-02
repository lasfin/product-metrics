'use strict';

const fakeData = require('./mock-data');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(fakeData);
});


module.exports = router;