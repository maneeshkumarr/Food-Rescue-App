const express = require('express');
const FoodItem = require('../models/FoodItem');

const router = express.Router();

// GET all food donations
router.get('/', async (req, res) => {
  try {
    const items = await FoodItem.find().sort({ postedAt: -1 });
    res.json(items);
  } catch (err) {
    console.error('Error fetching food items:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new food donation
router.post('/', async (req, res) => {
  try {
    const { restaurantName, foodType, quantity, location, phone } = req.body;

    // Validation
    if (!restaurantName || !foodType || !quantity || !location || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

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
