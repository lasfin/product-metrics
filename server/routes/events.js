'use strict';

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const cr = require('./credentials/db-user');

router.get('/', (req, res, next) => {
    const url = `mongodb://${cr.username}:${cr.password}@ds021000.mlab.com:21000/metrics`;

    MongoClient.connect(url, (err, db) => {
        findEvents(db, (events) => {
            db.close();
            res.send(events);
        });
    });
});


var findEvents = function(db, callback) {
    var collection = db.collection('events');
    collection.find({}).toArray((err, docs) => {
        callback(docs);
    });
};

module.exports = router;