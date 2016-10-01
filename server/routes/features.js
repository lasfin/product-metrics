'use strict';

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const cr = require('./credentials/db-user');
const url = `mongodb://${cr.username}:${cr.password}@ds021000.mlab.com:21000/metrics`;


router.get('/', (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        findAllFeatures(db, (features) => {
            db.close();
            res.send(features);
        });
    });
});


let findAllFeatures = function(db, callback) {
    db.collection('features').find({}).toArray((err, docs) => {
        callback(docs);
    });
};


module.exports = router;