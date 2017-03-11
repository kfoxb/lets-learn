let mongoose = require('mongoose');

let Images = mongoose.model('Images', {
  title: String,
  url: String
});

module.exports = Images;