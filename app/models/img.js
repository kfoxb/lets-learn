let mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

let Images = mongoose.model('Images', imageSchema);

module.exports = Images;