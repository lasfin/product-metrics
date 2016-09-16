'use strict';

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const cr = require('./credentials/db-user');
const url = `mongodb://${cr.username}:${cr.password}@ds021000.mlab.com:21000/metrics`;


router.get('/', (req, res, next) => {
    if (!req.query.days) {
        MongoClient.connect(url, (err, db) => {
            findAllEvents(db, (events) => {
                db.close();
                res.send(events);
            });
        });
    } else {
        MongoClient.connect(url, (err, db) => {
            findEventsForLastDays(db, req.query.days, (events) => {
                db.close();
                res.send(events);
            });
        });
    }
});


router.post('/', (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        db.collection('events').find({
            category: req.body.category || 'unknown',
            name: req.body.name || 'unknown',
            label: req.body.label || '',
        }).toArray(function(err, docs) {
            if (docs.length) {
                let newEvents = createNewEventsField(docs[0].events);
                updateEvent(db, req, newEvents, (result) => {
                    db.close();
                    res.send(result);
                })
            } else {
                createEvent(db, req, (result) => {
                    db.close();
                    res.send({id: result.insertedId});
                })
            }
        });
    });
});


let findAllEvents = function(db, callback) {
    db.collection('events').find({}).toArray((err, docs) => {
        callback(docs);
    });
};


let findEventsForLastDays = function(db, days, callback) {
    db.collection('events').find({}).toArray((err, docs) => {
        let today = new Date();
        let dateToCompare = new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);

        docs.map((doc) => {
            doc.events.map((event, index, arr) => {
                if (event.timestamp.getTime() < dateToCompare.getTime()) {
                    arr.splice(index, 1);
                }
            })
        });

        callback(docs);
    });
};


let createEvent = function(db, req, callback) {
    let today = new Date();
    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    db.collection('events').insertOne({
        category: req.body.category || 'unknown',
        name: req.body.name || 'unknown',
        label: req.body.label || '',
        events: [{
            timestamp: date,
            count: 1
        }]
    }, (err, result) => {
        callback(result);
    });
};


let updateEvent = function(db, req, newEvents, callback) {
    db.collection('events').updateOne({
        category: req.body.category,
        name: req.body.name,
        label: req.body.label || '',
    }, {
        $set: { events: newEvents }
    }, (err, result) => {
        callback(result);
    });
};


let createNewEventsField = function(eventsArr) {
    let today = new Date();
    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let found = false;

    eventsArr.map((event) => {
       if (event.timestamp.getTime() === date.getTime()) {
           event.count += 1;
           found = true;
       }
    });

    if (!found) {
        eventsArr.push({
            timestamp: date,
            count: 1
        })
    }

    return eventsArr;
};


module.exports = router;