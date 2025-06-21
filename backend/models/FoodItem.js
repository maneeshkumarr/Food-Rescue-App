// backend/models/FoodItem.js

const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  foodType: { type: String, required: true },
  quantity: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  pickedUp: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
