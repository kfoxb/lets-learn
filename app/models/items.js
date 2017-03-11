let mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  audUrl: { type: String, required: true },
  group: {type: String, required: true}
});

let Items = mongoose.model('Items', itemSchema);

module.exports = Items;