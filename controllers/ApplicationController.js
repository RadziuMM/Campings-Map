/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
const assert = require('assert');
const { MongoClient } = require('mongodb');
const marker = require('../models/marker');
const url = 'mongodb+srv://Boruta:alleluja97@cluster0-flymg.mongodb.net/test';

exports.store = (req, res) => {
  const newmarker = new marker();
  newmarker.lat = req.body.lat;
  newmarker.lng = req.body.lng;
  newmarker.place = req.body.place;
  newmarker.description = req.body.description;
  newmarker.email = req.body.email;

  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, client) => {
    assert.equal(null, err);
    const db = client.db('CampsMaps');

    db.collection('Markers').insertOne(newmarker)
      .then((result) => {
        console.log('new insert');
      });
  });
  res.redirect('https://campingmap.herokuapp.com/')
};

exports.getstore = (req, res) => {
  let cords;
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, db) => {
    if (err) throw err;
    const dbo = db.db('CampsMaps');
    dbo.collection('Markers').find().toArray((error, result) => {
      if (error) throw err;
      cords = result;
      res.send(cords);
    });
  });
};
