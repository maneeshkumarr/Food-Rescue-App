const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// GET all food items
router.get('/', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new food donation
router.post('/', async (req, res) => {
  const { restaurantName, foodType, quantity, location, phone, pickedUp } = req.body;

  if (!restaurantName || !foodType || !quantity || !location || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newFoodItem = new FoodItem({
      restaurantName,
      foodType,
      quantity,
      location,
      phone,
      pickedUp: pickedUp || false
    });

    const savedItem = await newFoodItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
