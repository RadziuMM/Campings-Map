/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const Double = require('@mongoosejs/double');


const markerShema = new Schema({
  lat: 'double',
  lng: 'double',
  place: String,
  description: String,
  email: String,
});

module.exports = mongoose.model('marker', markerShema, 'markers');
