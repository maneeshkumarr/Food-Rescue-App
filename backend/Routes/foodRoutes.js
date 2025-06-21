// backend/routes/foodRoutes.js

const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem'); // Make sure this path is correct

// GET all food items, sorted by latest
router.get('/', async (req, res) => {
  try {
    const items = await FoodItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error('Error fetching food items:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new food donation
router.post('/', async (req, res) => {
  const { restaurantName, foodType, quantity, location, phone } = req.body;

  if (!restaurantName || !foodType || !quantity || !location || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newFoodItem = new FoodItem({
      restaurantName,
      foodType,
      quantity,
      location,
      phone,
      pickedUp: false
    });

    const savedItem = await newFoodItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error saving food item:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;