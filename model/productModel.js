const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {type: String, required: true, unique: true,},
  description: String, 
  category: {type: String, required: true},
  price: {type: Number, min: [1, 'Invalid Price'], required: true},
  discountPercentage: Number,
  rating: {type: Number, min: [0, 'Invalid Rating'], max: [5, 'Invalid Rating'], default: 0},
  stock: {type: Number, min: [1, 'Stock must be above 1'], required: true},
  brand: {type: String, required: true},
  images: [String],
  thumbnail: String,
});

exports.Product = mongoose.model('Product', productSchema)
