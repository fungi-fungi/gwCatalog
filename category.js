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
},{ collection: process.env.CATEGORY_COLECTION_NAME });

module.exports = mongoose.model('Category', categorySchema);
