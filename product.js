// The Product model

const mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

const productSchema = new Schema({
  id: String,
  spec_id: String,
  name: String,
  color: String,
  treatment: String,
  fullPath: String
},{ collection: 'products' });

module.exports = mongoose.model('Product', productSchema);
