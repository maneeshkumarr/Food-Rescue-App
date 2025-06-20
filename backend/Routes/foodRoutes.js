const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Create food item
router.post('/', async (req, res) => {
  try {
    const item = new FoodItem(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all food items
router.get('/', async (req, res) => {
  const items = await FoodItem.find();
  res.json(items);
});

// Update pickup status
router.put('/:id', async (req, res) => {
  const updated = await FoodItem.findByIdAndUpdate(req.params.id, { pickedUp: req.body.pickedUp }, { new: true });
  res.json(updated);
});

// Delete food item
router.delete('/:id', async (req, res) => {
  await FoodItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
