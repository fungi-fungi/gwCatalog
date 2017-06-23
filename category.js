// The Product model

const mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

const categorySchema = new Schema({
  id: String,
  name: String,
  mgid: String,
  link: String,
  parent: String,
  hasChildren: Boolean,
  parts: Array,
  rentals: Array,
  services: Array
},{ collection: 'categories_copy' });

module.exports = mongoose.model('Category', categorySchema);
