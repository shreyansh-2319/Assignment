const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require('./routes');

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/library', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mount Routes
app.use('/books', bookRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
