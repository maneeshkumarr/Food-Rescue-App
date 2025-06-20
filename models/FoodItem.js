// models/FoodItem.js
const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  _id: Number,
  foodItem: {
    type: String,
    required: true
  },
  quantity: {
    type: String, // e.g., "5 plates", "10 packs"
    required: true
  },
  location: {
    type: String,
    required: true
  },
  pickedUp: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
