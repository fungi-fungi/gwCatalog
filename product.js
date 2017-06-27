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
},{ collection: process.env.PRODUCTS_COLECTION_NAME });

module.exports = mongoose.model('Product', productSchema);
