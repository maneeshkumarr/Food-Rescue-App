const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');  // this should be your router, not model

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/food_rescue')
  .catch(err => console.error('❌ MongoDB connection error:', err));

mongoose.connection.on('connected', () => console.log('✅ MongoDB connected'));
mongoose.connection.on('error', err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => res.send('Food Rescue API is running.'));

app.use('/api/food', foodRoutes); // this will now handle GET and POST properly

// 404 handler
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

// global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  if (err instanceof SyntaxError && err.message.includes('Invalid JSON')) {
    return res.status(400).json({ error: 'Malformed JSON in request body' });
  }
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
