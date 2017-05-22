// The Product model

const mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

const productSchema = new Schema({
  id: String,
  spec_id: Number,
  name: String,
  color: String,
  treatment: String,
  fullPath: String
});

module.exports = mongoose.model('Product', productSchema);
