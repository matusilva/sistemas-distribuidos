const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       trim: true
   },
   idName: {
     type: String,
     required: true,
     trim: true,
     unique: true
   },
   description: {
       type: String,
       required: true,
   },
   price: {
       type: Number,
       required: true
   },
   active: {
       type: Boolean,
       required: true,
       default: true
   }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;